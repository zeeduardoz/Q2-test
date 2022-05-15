import { createGlobalStyle } from 'styled-components'

import PoppinsBlack from '@assets/fonts/Poppins-Black.ttf'
import PoppinsBold from '@assets/fonts/Poppins-Bold.ttf'
import PoppinsExtraBold from '@assets/fonts/Poppins-ExtraBold.ttf'
import PoppinsExtraLight from '@assets/fonts/Poppins-ExtraLight.ttf'
import PoppinsLight from '@assets/fonts/Poppins-Light.ttf'
import PoppinsMedium from '@assets/fonts/Poppins-Medium.ttf'
import PoppinsRegular from '@assets/fonts/Poppins-Regular.ttf'
import PoppinsSemiBold from '@assets/fonts/Poppins-SemiBold.ttf'
import PoppinsThin from '@assets/fonts/Poppins-Thin.ttf'

export default createGlobalStyle`
    @font-face {
        font-family: 'Poppins Black';
        src: url(${PoppinsBlack}) format('truetype');
    }

    @font-face {
        font-family: 'Poppins ExtraBold';
        src: url(${PoppinsExtraBold}) format('truetype');
    }

    @font-face {
        font-family: 'Poppins Bold';
        src: url(${PoppinsBold}) format('truetype');
    }

    @font-face {
        font-family: 'Poppins SemiBold';
        src: url(${PoppinsSemiBold}) format('truetype');
    }

    @font-face {
        font-family: 'Poppins Medium';
        src: url(${PoppinsMedium}) format('truetype');
    }

    @font-face {
        font-family: 'Poppins Regular';
        src: url(${PoppinsRegular}) format('truetype');
    }

    @font-face {
        font-family: 'Poppins Light';
        src: url(${PoppinsLight}) format('truetype');
    }

    @font-face {
        font-family: 'Poppins Thin';
        src: url(${PoppinsThin}) format('truetype');
    }

    @font-face {
        font-family: 'Poppins ExtraLight';
        src: url(${PoppinsExtraLight}) format('truetype');
    }
`
