import React from 'react'
import Index from '../src/components/carousel'

const TOP_LEFT = 'TOP-LEFT'
const TOP_RIGHT = 'TOP-RIGHT'
const BOTTOM_LEFT = 'BOTTOM-LEFT'
const BOTTOM_RIGHT = 'BOTTOM-RIGHT'

export default {
    title: 'Carousel'
}

const BANNER_BUTTON_DATA = {
    [TOP_LEFT]: {
        url: 'https://cataas.com/cat?width=300',
        link: 'https://www.youtube.com/watch?v=WBPrJSw7yQA'
    },
    [TOP_RIGHT]: {
        url: 'https://cataas.com/cat?width=300',
        link: 'https://www.youtube.com/watch?v=WBPrJSw7yQA'
    },
    [BOTTOM_LEFT]: {
        url: 'https://cataas.com/cat?width=300',
        link: 'https://www.youtube.com/watch?v=WBPrJSw7yQA'
    },
    [BOTTOM_RIGHT]: {
        url: 'https://cataas.com/cat?width=300',
        link: 'https://www.youtube.com/watch?v=WBPrJSw7yQA'
    }
}

export const toStorybook = () => <Index
    picsData={PICS_LIST}
    unitWidth={200}
    unitHeight={200}
/>

toStorybook.story = {
    name: 'Index'
}
