import { getApi } from "@/service/service";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";





export default function useColors (){
    const [isLoading, setIsLoading] = useState(false);
    const [totalPages, settotalPages] = useState(1);
    const [numberPage, setNumberPage] = useState(1);
    const searchParams = useSearchParams();
    const page = searchParams.get("page");
    const [colorList, setColorList] = useState([]);
  
    const router = useRouter();
    const isBackDisabled = numberPage <= 1;
    const isNextDisabled = numberPage >= totalPages;
  
    useEffect(() => {
      setIsLoading(true);
      getApi(page || 1).then((data) => {
        console.log(data);
        settotalPages(data.total_pages);
        setColorList(data.data);
        setNumberPage(data.page);
        setIsLoading(false);
      });
    }, [page]);
  
    const next = () => {
      router.push(`?page=${numberPage + 1}`);
    };
  
    const back = () => {
      router.push(`?page=${numberPage - 1}`);
    };
    return {isLoading,
        colorList,
        isBackDisabled,
        isNextDisabled,
        next,
        back
    }
}