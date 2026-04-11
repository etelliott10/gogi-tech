import { NextResponse } from 'next/server';
import { caseStudies } from '@/lib/content';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get('page') || 1);
  const pageSize = Number(searchParams.get('pageSize') || 10);

  const start = (page - 1) * pageSize;
  const data = caseStudies.slice(start, start + pageSize);

  return NextResponse.json({
    data,
    pagination: {
      page,
      pageSize,
      total: caseStudies.length,
      totalPages: Math.ceil(caseStudies.length / pageSize)
    }
  });
}
