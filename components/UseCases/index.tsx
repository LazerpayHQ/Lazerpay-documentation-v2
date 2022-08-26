import React from 'react'
import { PlainCard } from 'components/GetstartedCard/Cards'
import { ShopifyIcon, WooCommerceIcon, WordPressIcon } from 'public/icons'

const Ecommerce = () => {
    return (
        <div className='grid md:grid-cols-2 gap-8 '>
            <PlainCard
                key='1'
                title={"WooCommerce"}
                customIcon={<WooCommerceIcon />}
                className='md:h-[269px] pt-6 md:pt-12'
                desc={"Nullam id diam lacinia id ornare. Dui, mattis sit molestie fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}

                route={"#"} />

            <PlainCard
                key='2'
                title={"Shopify"}
                customIcon={<ShopifyIcon />}
                desc={"Nullam id diam lacinia id ornare. Dui, mattis sit molestie fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                route={"#"} />

            <PlainCard
                key='3'
                title={"WordPress"}
                customIcon={<WordPressIcon />}
                className='md:h-[269px] pt-6 md:pt-12'
                desc={"Nullam id diam lacinia id ornare. Dui, mattis sit molestie fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                route={"#"} />
        </div>
    )
}

export default Ecommerce