/* Vendors */
import styled from 'styled-components'

/* Types */

/* Utils */

/* Styles */
export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`

export const Th = styled.th`
  border: 1px solid var(--color-light-grey);
  padding: 12px;
  text-align: left;
  
  font-weight: bold;
  white-space: nowrap;
  
  background: #fff;
  
  & button {
    background: #fff;
    border: 0;
    padding: 2px 8px;
    border-radius: 4px;
    font-weight: bold;
    vertical-align: middle;
    margin-left: 4px;
    
    &:focus {
      box-shadow: 0 0 0 4px DodgerBlue;
      outline: none;
    }
  }
`

export const Td = styled.td`
  border: 1px solid var(--color-light-grey);
  padding: 12px;
  text-align: left;
`

export const Caption = styled.caption`
  margin-bottom: 0.5rem;
  font-style: italic;
  text-align: left;
`
export const SVG = styled.svg`
  stroke: currentColor;
  stroke-width: 20;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  width: 0.5rem;
  height: 1.5em;
`

export const Dl = styled.dl`
  display: flex;
  flex-wrap: wrap;
  
  & > * {
    flex: 0 0 50%;
    margin: 0;
  }
`

export const Dt = styled.dt`
  padding-right: 0.5rem;
  font-weight: bold;
`

export const TableContainer = styled.div`
  @media (max-width: 400px) {
    display: none;
  }
`

export const ListContainer = styled.div`
  display: none;
  
  @media (max-width: 400px) {
    display: block;
  }
`

export const VisuallyHidden = styled.span`
  position: absolute !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  padding: 0 !important;
  border: 0 !important;
  height: 1px !important;
  width: 1px !important;
  overflow: hidden !important;
`
