export function getCssVar(varname: string): string {
  const _varname = varname.startsWith('--') ? varname : `--${varname}`
  return window.getComputedStyle(window.document.documentElement).getPropertyValue(_varname)
}


export function setCssVar(varname: string, value: string) {
  const _varname = varname.startsWith('--') ? varname : `--${varname}`
  window.document.documentElement.style.setProperty(_varname, value)
}


/** @returns duration in ms */
export function cssDurationToMs(raw: string): number {
  const match = /^(?<duration>\d+(?:\.\d+)?|\.\d+)(?<unit>m?s)$/u.exec(raw)
  if (match == null) {
    throw new Error(`Invalid duration from CSS variable: ${raw}`)
  }
  const duration = match.groups?.duration
  if (duration == null) {
    throw new Error(`Invalid duration from CSS variable: ${raw}`)
  }
  const unit = match.groups?.unit
  if (unit == null || (unit !== 'ms' && unit !== 's')) {
    throw new Error(`Invalid duration from CSS variable: ${raw}`)
  }
  return Number(duration) * (unit === 's' ? 1000 : 1)
}


/** @returns duration in ms */
export function getCssDuration(varname: string): number {
  const raw = getCssVar(varname)
  return cssDurationToMs(raw)
}
