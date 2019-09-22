/** @jsx jsx */
import { jsx, Styled, Layout, Main, Container } from 'theme-ui'
import { useState, useRef } from 'react'
import { Global } from '@emotion/core'

import SkipLink from './skip-link'
import Header from './header'
import Footer from './footer'
import Sidebar from './sidebar'
import Pagination from './pagination'
import EditLink from './edit-link'
import Head from './head'

export default props => {
  const [menuOpen, setMenuOpen] = useState(false)
  const nav = useRef(null)

  return (
    <Styled.root>
      <Head {...props} />
      <Global
        styles={{
          '*': {
            boxSizing: 'border-box',
          },
          body: {
            margin: 0,
          },
        }}
      />
      <SkipLink>Skip to content</SkipLink>
      <Layout
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          overflowY: 'hidden',
        }}>
        <Header nav={nav} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Main
          sx={{
            display: 'flex',
          }}>
          <Container
            sx={{
              pt: 0,
              pb: 5,
              px: props.fullwidth ? 0 : 3,
              maxWidth: props.fullwidth ? 'none' : '',
            }}>
            <div
              sx={{
                display: ['block', 'flex'],
                mx: props.fullwidth ? 0 : -3,
              }}>
              <div
                ref={nav}
                onFocus={e => {
                  setMenuOpen(true)
                }}
                onBlur={e => {
                  setMenuOpen(false)
                }}
                onClick={e => {
                  setMenuOpen(false)
                }}>
                <Sidebar
                  open={menuOpen}
                  sx={{
                    display: [null, props.fullwidth ? 'none' : 'block'],
                    flexShrink: 0,
                    overflowY: 'scroll',
                    height: 'calc(100vh - 70px)',
                    borderRight: '1px solid #ddd',
                  }}
                />
              </div>
              <div
                id="content"
                sx={{
                  // width: '100%',
                  // minWidth: 0,
                  // px: props.fullwidth ? 0 : 3,
                  pl: 90,
                  pr: 200,
                  py: 40,
                  flexGrow: 1,
                  overflowY: 'scroll',
                  height: 'calc(100vh - 70px)',
                }}>
                {props.children}
                <EditLink />
                {!props.fullwidth && <Pagination />}
              </div>
            </div>
          </Container>
        </Main>
        {props.fullwidth && <Footer />}
      </Layout>
    </Styled.root>
  )
}
