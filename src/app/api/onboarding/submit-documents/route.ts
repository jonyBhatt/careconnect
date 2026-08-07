import { headers } from "next/dist/server/request/headers";
import { NextResponse } from "next/server";
import { z } from "zod";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const SubmittedDocumentsSchema = z.object({
  idFront: z
    .object({
      url: z.string().url(),
      fileName: z.string().optional(),
      uploadedAt: z.string().optional(),
    })
    .optional(),
  idBack: z
    .object({
      url: z.string().url(),
      fileName: z.string().optional(),
      uploadedAt: z.string().optional(),
    })
    .optional(),
  selfie: z
    .object({
      url: z.string().url(),
      fileName: z.string().optional(),
      uploadedAt: z.string().optional(),
    })
    .optional(),
  medicalLicense: z
    .object({
      url: z.string().url(),
      fileName: z.string().optional(),
      uploadedAt: z.string().optional(),
    })
    .optional(),
  cprCertificate: z
    .object({
      url: z.string().url(),
      fileName: z.string().optional(),
      uploadedAt: z.string().optional(),
    })
    .optional(),
});

export async function POST(request: Request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body;

  try {
    body = SubmittedDocumentsSchema.parse(await request.json());
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid submission payload." },
      { status: 400 },
    );
  }

  const documentUploads = {
    idFront: body.idFront ?? null,
    idBack: body.idBack ?? null,
    selfie: body.selfie ?? null,
    medicalLicense: body.medicalLicense ?? null,
    cprCertificate: body.cprCertificate ?? null,
  };

  try {
    const createData: any = {
      userId: session.user.id,
      verificationStatus: "PENDING",
      idDocumentUrl: body.idFront?.url ?? null,
      selfieUrl: body.selfie?.url ?? null,
      documentUploads,
    };

    const updateData: any = {
      documentUploads,

    };

    if (body.idFront?.url) {
      updateData.idDocumentUrl = body.idFront.url;
    }

    if (body.selfie?.url) {
      updateData.selfieUrl = body.selfie.url;
    }

    await prisma.user.update({
      where: { id: session.user.id },
      data: {
        role: "COMPANION",
      },
    })

    await prisma.companion.upsert({
      where: { userId: session.user.id },
      
      create: createData,
      update: updateData,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Onboarding document submit error:", error);
    return NextResponse.json(
      { error: "Failed to save verification documents." },
      { status: 500 },
    );
  }
}
