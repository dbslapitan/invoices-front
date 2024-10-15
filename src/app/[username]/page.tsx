import { redirect } from "next/navigation";

export default function Username(){

    redirect("/preview/invoices");

    return null;
}