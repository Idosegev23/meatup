'use client';

import { useLoading } from '@/context/LoadingContext';
import PageLoader from './PageLoader';

export default function PageLoaderWrapper() {
  const { isLoading } = useLoading();
  return <PageLoader isLoading={isLoading} />;
}


