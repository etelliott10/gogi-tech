import { NextResponse } from 'next/server';
import { caseStudies } from '@/lib/content';

interface CaseStudyRouteParams {
  params: { slug: string };
}

export async function GET(_request: Request, { params }: CaseStudyRouteParams) {
  const caseStudy = caseStudies.find((item) => item.slug === params.slug);

  if (!caseStudy) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(caseStudy, { status: 200 });
}
