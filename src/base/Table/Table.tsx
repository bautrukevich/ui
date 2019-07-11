/* Vendors */
import React, {Component, Fragment, createRef, RefObject, ReactNode} from 'react'
// import styled from 'styled-components'

/* Styles */
import * as Styled from './Table.styled'
// import {Input} from '../..'
//
// /* Components */
// const FilterInput = styled(Input)`
//   margin-top: 8px;
//   display: block;
// `

/* Utils */

/* Types */
import {Props, State, SortDir, TableRow} from './Table.types'

/* Component */
interface ArrowProps {
  sortDir: SortDir;
  isCurrent: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Arrow = ({sortDir, isCurrent}: ArrowProps) => {
  let isAscending = sortDir === 'ascending'

  return (
    <Styled.SVG viewBox="0 0 100 200" width="100" height="200">
      {!(!isAscending && isCurrent) && (
        <polyline points="20 50, 50 20, 80 50" />
      )}
      <line x1="50" y1="20" x2="50" y2="180" />
      {!(isAscending && isCurrent) && (
        <polyline points="20 150, 50 180, 80 150" />
      )}
    </Styled.SVG>
  );
};

export class Table extends Component<Props, State> {
  private readonly container: string | ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined
  private readonly captionID: string

  state: State = {
    rows: this.props.rows,
    rowHeaders: this.props.rowHeaders,
    sortedBy: null,
    sortDir: 'none',
  }

  constructor(props: Props) {
    super(props)
    this.container = createRef()
    this.captionID =
      'caption-' +
      Math.random()
        .toString(36)
        .substr(2, 9)
  }

  // @ts-ignore
  sortBy = (i) => {
    let sortDir: SortDir
    let ascending = this.state.sortDir === 'ascending'
    if (i === this.state.sortedBy) {
      sortDir = !ascending ? 'ascending' : 'descending'
    } else {
      sortDir = 'ascending'
    }
    this.setState((prevState: State) => ({
      rows: prevState.rows.slice(0).sort((a: TableRow, b: TableRow) => {
        if (sortDir === 'ascending') {
          return a[i] > b[i] ? 1 : a[i] < b[i] ? -1 : 0;
        } else {
          return a[i] < b[i] ? 1 : a[i] > b[i] ? -1 : 0;
        }
      }),
      sortedBy: i,
      sortDir,
    }));
  }

  componentDidMount(): void {
    // @ts-ignore
    const { scrollWidth, clientWidth } = this.container
    let scrollable = scrollWidth > clientWidth
    this.setState({
      tabindex: scrollable ? 0 : undefined
    })
  }

  render(): ReactNode {
    return (
      <div>
        <Styled.TableContainer
          // @ts-ignore
          ref={this.container}
          tabIndex={this.state.tabindex}
          aria-labelledby={this.captionID}
          role="group"
        >
          <Styled.Table>
            <Styled.Caption id={this.captionID}>
              {this.props.caption}
              {this.state.tabindex === 0 && (
                <div>
                  <small>(scroll to see more)</small>
                </div>
              )}
            </Styled.Caption>
            <tbody>
              {this.props.headers && (
                <tr>
                  {this.props.headers.map((header: string, i: number) => (
                    <Styled.Th
                      role="columnheader"
                      scope="col"
                      key={i}
                      aria-sort={
                      // @ts-ignore
                        this.state.sortedBy === i ? this.state.sortDir : 'none'
                      }
                    >
                      {header}
                      {this.props.sortable && (
                        <button onClick={() => this.sortBy(i)}>
                          <Arrow
                            sortDir={this.state.sortDir}
                            isCurrent={
                              // @ts-ignore
                              this.state.sortedBy === i
                            }
                          />
                          <Styled.VisuallyHidden>
                            sort by {header} in
                            {this.state.sortDir !== 'ascending'
                              ? 'ascending'
                              : 'descending'}
                            order
                          </Styled.VisuallyHidden>
                        </button>
                      )}
                      {/*<FilterInput*/}
                      {/*  name='default'*/}
                      {/*  onChange={() => {}} />*/}
                    </Styled.Th>
                  ))}
                </tr>
              )}

              {this.state.rows.map((row, i) => (
                <tr key={i}>
                  {row.map(
                    (cell: string, i: number) =>
                      this.props.rowHeaders && i < 1 ? (
                        <Styled.Th scope="row" key={i}>
                          {cell}
                        </Styled.Th>
                      ) : (
                        <Styled.Td key={i}>{cell}</Styled.Td>
                      )
                  )}
                </tr>
              ))}
            </tbody>
          </Styled.Table>
        </Styled.TableContainer>
        <Styled.ListContainer>
          <h2>{this.props.caption}</h2>
          {this.props.rows.map((row, i) => (
            <div key={i}>
              <h3>{row[0]}</h3>
              {this.props.headers && (
                <Styled.Dl>
                  {this.props.headers.map(
                    (header: string, i: number) =>
                      i > 0 && (
                        <Fragment key={i}>
                          <Styled.Dt>{header}</Styled.Dt>
                          <dd>{row[i]}</dd>
                        </Fragment>
                      )
                  )}
                </Styled.Dl>
              )}
            </div>
          ))}
        </Styled.ListContainer>
      </div>
    );
  }
}
