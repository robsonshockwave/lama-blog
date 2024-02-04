'use client';

import Link from 'next/link';
import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';

const NavigationTestPage = () => {
  // CLIENT SIDE NAVIGATION
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  //   const q = searchParams.get('q');

  //   console.log(q);

  const handleClick = () => {
    console.log('clicked');

    // Ele adiciona uma nova entrada à pilha de histórico do navegador, o que significa que, ao pressionar o botão "voltar" do navegador, o usuário será redirecionado à página anterior.
    // router.push('/');

    // Este método substitui a entrada atual no histórico de navegação por uma nova. O usuário não poderá retroceder para a página anterior usando o botão "voltar" do navegador após a execução deste método.
    // router.replace('/');

    // router.refresh();

    // router.back();

    // Abre a próxima página
    // router.forward();
  };

  return (
    <div>
      <Link href="/" prefetch={false}>
        Click here
      </Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  );
};

export default NavigationTestPage;
