import Refresh from "@/ui/refresh/refresh";

export default function EditPage({ params }: { params: { username: string, invoiceId: string } }){
    return(
        <Refresh params={{url: `/${params.username}/invoice/${params.invoiceId}`}}/>
    );
}