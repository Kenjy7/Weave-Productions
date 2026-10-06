import { projecten } from '../content/home'

// Live enkel zichtbaar als `zichtbaar: true`; tijdens `npm run dev` altijd, als concept.
export const toonProjecten = projecten.zichtbaar || import.meta.env.DEV
