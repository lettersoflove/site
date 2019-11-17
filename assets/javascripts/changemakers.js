import * as $ from 'jquery';

const CLASSES = {
    detailsOverlay: `.js-details-overlay`,
    detailsHeader: `.js-details-header`,
    profileBtn: `.js-profile-btn`,
    qaItem: `.js-qa-item`,
    profileItem: `.js-profile-item`
};

const $el = {};

const hideDetails = () => {
    $el.detailsOverlay.addClass(`hidden`);
    [$el.qaItem, $el.profileItem, $el.detailsHeader].forEach(e => e.removeClass(`active`));
};

const showDetails = (e) => {
    // const profile = $(e.target).data(`profile-index`);
    $el.detailsOverlay.removeClass(`hidden`);
    setTimeout(() => $el.profileItem.addClass(`active`), 50);
    setTimeout(() => $el.qaItem.addClass(`active`), 350);
    setTimeout(() => $el.detailsHeader.addClass(`active`), 400);
}


export default () => {
    Object.entries(CLASSES).forEach(([key,val]) => $el[key] = $(`${val}`));
    $el.detailsHeader.click(hideDetails);
    $el.profileBtn.click(showDetails);
};