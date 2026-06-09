/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Whisper {
  id: string;
  category: 'relationship' | 'parenting' | 'work_life' | 'loneliness' | 'as_dad';
  categoryLabel: string;
  content: string;
  createdAt: string;
  supportCount: number;
  isSupportedByMe?: boolean;
}

export interface Inquiry {
  id: string;
  nickname: string;
  contact: string; // email or line id
  preferredDate: string;
  message: string;
  submittedAt: string;
}

export const PRESET_WHISPERS: Whisper[] = [
  {
    id: 'w1',
    category: 'relationship',
    categoryLabel: '妻との関係',
    content: '仕事から帰ってきたとき、リビングに行くのが少し怖くなる。いつも一生懸命やっているつもりだけど、すれ違うばかり。だけど、こんなこと誰にも相談できない。',
    createdAt: '2026-06-03 21:04',
    supportCount: 14,
    isSupportedByMe: false
  },
  {
    id: 'w2',
    category: 'parenting',
    categoryLabel: '育児の対話',
    content: '子供は本当に愛おしい。だけど、仕事の激務のなかで迎える休日に、心の底から全力で一緒に遊べない自分がいて、申し訳なさと疲弊感で一杯になる。父親としてこれでいいんだろうか。',
    createdAt: '2026-06-04 02:15',
    supportCount: 8,
    isSupportedByMe: false
  },
  {
    id: 'w3',
    category: 'loneliness',
    categoryLabel: '弱音と静寂',
    content: '職場では「頼れる上司」、家では「強い父親」を演じているけれど、時々すべての役割を降ろして、ただ一人の人間として静かに座っていたい時間がある。弱音を吐くのが下手くそになった。',
    createdAt: '2026-06-04 18:40',
    supportCount: 22,
    isSupportedByMe: true
  },
  {
    id: 'w4',
    category: 'as_dad',
    categoryLabel: '自身の役割',
    content: '宮古島で静かな夜の灯りがあるなら、お酒も飲まず、ただ同じように悩んでいる他の父親たちの日常の息づかいを、ただ静かに聞いてみたい。一人じゃないと思えるだけで救われるから。',
    createdAt: '2026-06-05 00:05',
    supportCount: 19,
    isSupportedByMe: false
  }
];

export const EVENTS = [
  {
    id: 'evt-1',
    date: '2026年6月20日 (土) 19:30 - 20:30',
    location: '宮古島市・平良港近くの古民家 (詳細は申込時に通知)',
    status: '受付中'
  },
  {
    id: 'evt-2',
    date: '2026年7月11日 (土) 19:30 - 20:30',
    location: '宮古島市・下地地区の静かなカフェ (詳細は申込時に通知)',
    status: '受付中'
  }
];
