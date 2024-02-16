// matcher permite filtrar o middleware para rodar (ou não como no exemplo) em caminhos específicos. Se você não adicionar nenhum matcher. o middleware será invocado para todas as rotas do seu projeto.

import NextAuth from 'next-auth';
import { authConfig } from './lib/auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next).*)'],
};

// FOR MORE INFORMATION CHECK: https://nextjs.org/docs/app/building-your-application/routing/middleware
