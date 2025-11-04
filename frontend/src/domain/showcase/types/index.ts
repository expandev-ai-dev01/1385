/**
 * @types ShowcaseTypes
 * @summary Type definitions for showcase domain
 * @domain showcase
 * @category types
 */

export interface ImageGalleryItem {
  id: string;
  categoria_imagem:
    | 'quartos'
    | 'areas_comuns'
    | 'praia'
    | 'piscinas'
    | 'restaurantes'
    | 'bares'
    | 'eventos';
  titulo_imagem: string;
  descricao_imagem?: string;
  url_imagem: string;
  url_imagem_thumbnail: string;
  destaque: boolean;
  ordem_exibicao?: number;
  tags?: string[];
  data_atualizacao: string;
}

export interface Accommodation {
  id: string;
  tipo_acomodacao:
    | 'standard'
    | 'superior'
    | 'luxo'
    | 'suite'
    | 'suite_executiva'
    | 'suite_presidencial';
  nome_acomodacao: string;
  descricao_curta: string;
  descricao_completa: string;
  metragem: number;
  capacidade_maxima: number;
  capacidade_adultos: number;
  capacidade_criancas: number;
  tipo_cama: string[];
  comodidades: string[];
  tarifa_base: number;
  imagens: string[];
  destaque: boolean;
  ordem_exibicao?: number;
}

export interface LeisureArea {
  id: string;
  nome_area: string;
  tipo_area:
    | 'piscina'
    | 'praia'
    | 'spa'
    | 'academia'
    | 'quadra'
    | 'salao_jogos'
    | 'kids_club'
    | 'outro';
  descricao_curta: string;
  descricao_completa: string;
  horario_funcionamento: string;
  restricoes?: string[];
  servicos_inclusos?: string[];
  servicos_pagos?: string[];
  imagens: string[];
  destaque: boolean;
  ordem_exibicao?: number;
}

export interface GastronomyEstablishment {
  id: string;
  nome_estabelecimento: string;
  tipo_estabelecimento: 'restaurante' | 'bar' | 'cafeteria' | 'outro';
  especialidade: string;
  descricao_curta: string;
  descricao_completa: string;
  horario_funcionamento: string;
  preco_medio?: string;
  reserva_necessaria: boolean;
  cardapio: MenuSection[];
  imagens: string[];
  destaque: boolean;
  ordem_exibicao?: number;
}

export interface MenuSection {
  nome: string;
  itens: MenuItem[];
}

export interface MenuItem {
  nome: string;
  descricao: string;
  preco: number;
  especial?: boolean;
}

export interface HotelService {
  id: string;
  nome_servico: string;
  categoria_servico: 'transporte' | 'concierge' | 'limpeza' | 'tecnologia' | 'bem_estar' | 'outro';
  descricao: string;
  incluso_diaria: boolean;
  valor?: string;
  disponibilidade: string;
  como_solicitar: string;
  icone: string;
  imagem?: string;
  destaque: boolean;
  ordem_exibicao?: number;
}

export interface ImageGalleryFilters {
  categoria?: ImageGalleryItem['categoria_imagem'];
  destaque?: boolean;
}

export interface AccommodationFilters {
  tipo?: Accommodation['tipo_acomodacao'];
  capacidade_minima?: number;
  tarifa_maxima?: number;
}

export interface LeisureAreaFilters {
  tipo?: LeisureArea['tipo_area'];
}

export interface GastronomyFilters {
  tipo?: GastronomyEstablishment['tipo_estabelecimento'];
  reserva_necessaria?: boolean;
}

export interface ServiceFilters {
  categoria?: HotelService['categoria_servico'];
  incluso_diaria?: boolean;
}
