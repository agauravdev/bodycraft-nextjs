import { redirect } from 'next/navigation';

export default function CataloguesPage() {
  redirect('/catalogue.pdf');
  return null;
}
