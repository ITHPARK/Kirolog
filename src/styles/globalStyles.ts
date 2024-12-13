import { colorPalette } from './colorPalette'
import { css } from '@emotion/react'

export default css`
    :root {
        --dimmed-zindex: 10;
        --alert-zindex: 11;
    }
    ${colorPalette} // 색상을 추가
    

    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video,
    input ,
    textarea {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
        font-family:
            'Pretendard Variable',
            Pretendard,
            -apple-system,
            BlinkMacSystemFont,
            system-ui,
            Roboto,
            'Helvetica Neue',
            'Segoe UI',
            'Apple SD Gothic Neo',
            'Noto Sans KR',
            'Malgun Gothic',
            'Apple Color Emoji',
            'Segoe UI Emoji',
            'Segoe UI Symbol',
            sans-serif;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol,
    ul {
        list-style: none;
    }
    blockquote,
    q {
        quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    button {
        border: none;
        margin: 0;
        padding: 0;
        width: auto;
        overflow: visible;

        background: transparent;

        color: inherit;
        font: inherit;

        line-height: normal;

        -webkit-font-smoothing: inherit;
        -moz-osx-font-smoothing: inherit;

        -webkit-appearance: none;
    }

    input {
        outline: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    html {
        height: 100%;
    }

    #root {
        position: relative;
        padding-bottom: 20px;
        height: calc(100vh - 60px);
        overflow-y: auto;
        flex: 1;
    }

    img {
        width: 100%;
        height: 100%;
    }

    input[type='radio'],
    input[type='checkbox'] {
        display: none;
    }

    body {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    #nav {
        position: relative;
        width: 100%;
        :after {
            content: '';
            width: 100%;
            height: 20px;
            background: #fff;
            position: absolute;
            left: 0;
            top: -20px;
        }
    }

    #bottomButton {
        z-index: 1001;
    }

    #modal-portal {
        z-index: 1002;
    }
`
