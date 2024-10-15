import Refresh from "@/ui/refresh/refresh";

export default function AddInvoice({ params }: { params: { username: string } }){

    return(
        <>
            <Refresh  params={{ url: `/${params.username}`}}/>
        </>
    );
}