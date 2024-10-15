import Link from "next/link";

export default function Invoice({params}: {params: {invoiceId: string}}){
    return(
        <Link href={`/preview/invoice/RT3080/edit`}>Go to</Link>
    );
}