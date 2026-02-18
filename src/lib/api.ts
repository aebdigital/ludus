import { supabase, SITE_ID } from './supabase'

export type GalleryCategory = 'skola-ludus' | 'ludus-academy' | 'divadlo-ludus' | 'ludus-tabor'
export type ProgramCategory = 'skola-ludus' | 'ludus-academy' | 'divadlo-ludus'

export interface GalleryImage {
  id: string
  image_path: string
  alt_text: string | null
  display_order: number
}

export interface Aktualita {
  id: string
  title: string
  description: string | null
  date: string
  category: string
  show_on_homepage: boolean
}

export interface ProgramEvent {
  id: string;
  slug: string;
  category: ProgramCategory;
  event_date: string;
  day_name: string;
  time: string;
  month: string;
  title: string;
  subtitle?: string;
  author?: string;
  age_badge?: string;
  venue: string;
  status: 'vypredane' | 'available' | 'info';
  info_text?: string;
  price?: string;
  color: string;
  image_path?: string;
  description?: string;
  duration?: string;
  age_info?: string;
  premiere?: string;
  cast_members: string[];
  team_members: { role: string; name: string }[];
  has_school_reservation?: boolean;
  has_ticket_reservation?: boolean;
  buy_ticket_link?: string;
  gallery_paths?: string[];
}


export async function getGalleryImages(category: GalleryCategory): Promise<GalleryImage[]> {
  const { data, error } = await supabase
    .from('gallery_images')
    .select('id, image_path, alt_text, display_order')
    .eq('site_id', SITE_ID)
    .eq('category', category)
    .order('display_order', { ascending: true })

  if (error) {
    console.error('Error fetching gallery images:', error)
    return []
  }
  return data || []
}

export async function getHomepageAktuality(): Promise<Aktualita[]> {
  const { data, error } = await supabase
    .from('aktuality')
    .select('id, title, description, date, category, show_on_homepage')
    .eq('site_id', SITE_ID)
    .eq('show_on_homepage', true)
    .eq('published', true)
    .order('date', { ascending: false })
    .limit(3)

  if (error) {
    console.error('Error fetching homepage aktuality:', error)
    return []
  }
  return data || []
}

export async function getCategoryAktuality(category: GalleryCategory): Promise<Aktualita[]> {
  const { data, error } = await supabase
    .from('aktuality')
    .select('id, title, description, date, category, show_on_homepage')
    .eq('site_id', SITE_ID)
    .eq('category', category)
    .eq('published', true)
    .order('date', { ascending: false })
    .limit(5)

  if (error) {
    console.error('Error fetching category aktuality:', error)
    return []
  }
  return data || []
}

export function getImageUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('/') || path.startsWith('http')) {
    return path;
  }
  const { data } = supabase.storage
    .from('site-uploads')
    .getPublicUrl(path)
  return data.publicUrl
}

export async function getProgramEvents(category?: ProgramCategory, upcomingOnly = false): Promise<ProgramEvent[]> {
  let query = supabase
    .from('program_events')
    .select('*')
    .eq('site_id', SITE_ID)
    .eq('published', true)
    .order('event_date', { ascending: true });

  if (category) {
    query = query.eq('category', category);
  }

  if (upcomingOnly) {
    query = query.gte('event_date', new Date().toISOString().split('T')[0]);
  }

  const { data, error } = await query;
  if (error) {
    console.error('Error fetching program events:', error);
    return [];
  }
  return data || [];
}

export async function getProgramEventBySlug(slug: string): Promise<ProgramEvent | null> {
  const { data, error } = await supabase
    .from('program_events')
    .select('*')
    .eq('site_id', SITE_ID)
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (error) {
    console.error('Error fetching program event:', error);
    return null;
  }
  return data;
}

export interface RepertoarItem {
  title: string
  slug: string
  image_path?: string
  subtitle?: string
  category: ProgramCategory
  age_badge?: string
  gallery_paths?: string[]
}

export async function getRepertoar(category?: ProgramCategory): Promise<RepertoarItem[]> {
  const events = await getProgramEvents(category)
  const seen = new Map<string, RepertoarItem>()
  for (const event of events) {
    if (!seen.has(event.title)) {
      seen.set(event.title, {
        title: event.title,
        slug: event.slug,
        image_path: event.image_path,
        subtitle: event.subtitle,
        category: event.category,
        age_badge: event.age_badge,
        gallery_paths: event.gallery_paths,
      })
    }
  }
  return Array.from(seen.values())
}

export async function getProgramEventsByTitle(title: string): Promise<ProgramEvent[]> {
  const { data, error } = await supabase
    .from('program_events')
    .select('*')
    .eq('site_id', SITE_ID)
    .eq('title', title)
    .eq('published', true)
    .order('event_date', { ascending: true })

  if (error) {
    console.error('Error fetching events by title:', error)
    return []
  }
  return data || []
}
