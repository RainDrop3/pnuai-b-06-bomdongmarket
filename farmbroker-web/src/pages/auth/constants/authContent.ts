import { Building2, ShoppingBasket, Sprout } from 'lucide-react';

export const authRoles = [
  {
    id: 'OWNER',
    label: '공간 제공자',
    description: '사용하지 않는 공간을 등록하고 계약을 관리합니다.',
    icon: Building2,
  },
  {
    id: 'FARMER',
    label: '도심 농부',
    description: '공간을 찾고 스마트팜을 시작합니다.',
    icon: Sprout,
  },
  {
    id: 'CONSUMER',
    label: '로컬 소비자',
    description: '근처 스마트팜에서 생산한 신선한 농산물을 구매합니다.',
    icon: ShoppingBasket,
  },
] as const;
