const config = {
    app_name: 'CRK Rarity Ranking',
    app_description: 'Check the rarity of Crypto Rich Kids NFTs.',
    collection_file_name: 'collection.json',
    collection_contract_address: '0xfaC7fe5e11FcbC837c2E115626324CAAf3A56dD9',
    collection_name: 'Crypto Rich Kids',
    collection_description: 'An elite collection of NFTs highlighting the transfer of wealth from the traditional “boomer” markets to the crypto youth of the world.',
    collection_id_from: 1,
    ignore_traits: ['date'], 
    sqlite_file_name: 'database.sqlite',
    ga: 'G-BW69Z04YTP',
    main_og_image: 'https://crkrarity.herokuapp.com/images/og.png',
    item_path_name: 'CRK',
    page_item_num: 50,
    content_image_is_video: false,
    content_image_frame: 'rectangle', // circle, rectangle
    use_wallet: false
};

module.exports = config;
