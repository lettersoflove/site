import * as $ from 'jquery';
import changemakers_data from "../../data/changemakers_json.json";
const changemakers_info = [`name`, `age`, `school`, `location`, `role`, `work`, `matter`, `why`];

const isMobile = () => typeof window !== `undefined` && window.innerWidth < 800;
const capitalized = string => string.charAt(0).toUpperCase() + string.slice(1);

const CLASSES = {
    detailsOverlay: `.js-details-overlay`,
    detailsHeader: `.js-details-header`,
    profileBtn: `.js-profile-btn`,
    qaItem: `.js-qa-item`,
    profileItem: `.js-profile-item`
};

const $el = {};
const $changemakers_el = {};

const hideDetails = () => {
    $el.detailsOverlay.addClass(`hidden`);
    [$el.qaItem, $el.profileItem, $el.detailsHeader].forEach(e => e.removeClass(`active`));
};

const injectData = index => {
    // insert text data
    const changemaker = changemakers_data[index];
    changemakers_info.forEach(key => $changemakers_el[`details${capitalized(key)}`].text(changemaker[key]));
    // insert image data
    const $detailsImage = $(`.js-details-image`);
    if(changemaker.image_url.length > 0) {
        $detailsImage.removeClass(`placeholder`);
        $detailsImage.css('background-image', `url(${changemaker.image_url})`);
    } else {
        $detailsImage.addClass(`placeholder`);
        $detailsImage.css('background-image', `url('images/logo.png')`);
    };
}

const showDetails = (e) => {
    const profileIndex = $(e.target).data(`profile-index`);
    injectData(profileIndex);
    $el.detailsOverlay.removeClass(`hidden`);
    setTimeout(() => $el.profileItem.addClass(`active`), 50);
    setTimeout(() => $el.qaItem.addClass(`active`), 350);
    $el.detailsHeader.addClass(`active`);
    isMobile() ? $el.detailsHeader.addClass(`active`) : setTimeout(() => $el.detailsHeader.addClass(`active`), 400);
}


export default () => {
    changemakers_info.forEach(key => $changemakers_el[`details${capitalized(key)}`] = $(`.js-details-${key}`));
    Object.entries(CLASSES).forEach(([key,val]) => $el[key] = $(`${val}`));
    $el.detailsHeader.click(hideDetails);
    $el.profileBtn.click(showDetails);
};