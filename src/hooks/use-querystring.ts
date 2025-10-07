import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useQueryString = () => {
  /* Navegar, mudar rot e atualizar a URL. */
  const router = useRouter();
  /* Retorna o caminho da URL, ex: /products */
  const pathname = usePathname();
  /* Retorna parâmetros de busca (?key=value) como um objeto URLSearchParams */
  const searchParams = useSearchParams();

  return {
    /* Recebe o nome de um parâmetro e retorna o valor correspondente na URL,se a URL for /products?page=2, então get("page") retorna "2" */
    get: (att: string) => {
      return searchParams.get(att);
    },
    /* Se val existe, adiciona ou atualiza o parâmetro.
    Se não existe, remove o parâmetro.
    No fim, atualiza a URL com router.push, mantendo o mesmo pathname mas com os novos parâmetros. */
    set: (att: string, val: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (val) {
        params.set(att, val);
      } else {
        params.delete(att);
      }
      router.push(`${pathname}?${params.toString()}`);
    },
  };
};
