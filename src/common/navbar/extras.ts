import { PUBLIC_ROUTES } from '@/constants/routes';
import { Briefcase, MoneyRecive, Building } from 'iconsax-react';
import { IoRocketOutline } from 'react-icons/io5';
import { TbCoins, TbReport } from 'react-icons/tb';
import { LuBarChartBig } from 'react-icons/lu';
import { MdOutlineRealEstateAgent } from 'react-icons/md';

export const userTypeTools = [
  {
    title: 'Startup',
    subtitle: 'See all featured products here',
    icon: IoRocketOutline,
    // path: PUBLIC_ROUTES.STARTUPS,
  },

  {
    title: 'Investors',
    subtitle: 'See all featured products here',
    icon: MdOutlineRealEstateAgent,
    // path: PUBLIC_ROUTES.INVEST_IN_VENTURE_FUNDS,
  },

  {
    title: 'Fund Managers',
    subtitle: 'See all featured products here',
    icon: TbCoins,
    // path: PUBLIC_ROUTES.FUND_MANAGEMENT,
  },
];

export const featuredTools = [
  {
    title: 'Raise',
    subtitle: 'Learn how our customers are making big changes.',
    icon: MoneyRecive,
    path: PUBLIC_ROUTES.RAISE,
  },
  {
    title: 'Cap table Management',
    subtitle: 'Learn how our customers are making big changes.',
    icon: Briefcase,
    path: PUBLIC_ROUTES.CAPTABLE,
  },

  {
    title: '409A Valuation',
    subtitle: 'Learn how our customers are making big changes.',
    icon: LuBarChartBig,
    path: PUBLIC_ROUTES.VALUATIONS,
  },
  {
    title: 'Financial Reporting',
    subtitle: 'Learn how our customers are making big changes.',
    icon: TbReport,
    path: PUBLIC_ROUTES.FINANCE_REPORTING,
  },

  {
    title: 'Incorporation',
    subtitle: 'Learn how our customers are making big changes.',
    icon: Building,
    path: PUBLIC_ROUTES.INCORPORATION,
  },
];
