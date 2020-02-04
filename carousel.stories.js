import React from 'react'
import Index from '../src/components/carousel'

export default {
    title: 'Carousel'
}

const PICS_LIST = [
    {
        url:"https://cataas.com/cat?width=300",
        link:"https://www.youtube.com/watch?v=WBPrJSw7yQA"
    },
    {
        url:"https://cataas.com/cat?width=300",
        link:"https://www.youtube.com/watch?v=WBPrJSw7yQA"
    },
    {
        url:"https://cataas.com/cat?width=300",
        link:"https://www.youtube.com/watch?v=WBPrJSw7yQA"
    },
    {
        url:"https://cataas.com/cat?width=300",
        link:"https://www.youtube.com/watch?v=WBPrJSw7yQA"
    }
]

export const toStorybook = () => <Index
    picsData={PICS_LIST}
    unitWidth={200}
    unitHeight={200}
/>

toStorybook.story = {
    name: 'Index'
}
