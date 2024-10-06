"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Refresh({ params }: { params: { url: string} }){

    const path = usePathname();
    const router = useRouter();
    const {url} = params;

    useEffect(() => {
        router.replace(url);

        return () => {
            router.push(path);
        };
    });

    return null;
}