import Refresh from "@/ui/refresh/refresh";
import { url } from "inspector";

export default function EditPage({ params }: { params: { username: string, invoiceId: string } }){
    console.log("at edit page")
    return(
        <Refresh params={{url: `/${params.username}/invoice/${params.invoiceId}`}}/>
    );
}