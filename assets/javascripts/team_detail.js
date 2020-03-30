import * as $ from 'jquery';
import team_data from "../../data/team.json";

const findMemberData = (name, surname) => 
  team_data.find(person => {
    name = name.toLowerCase()
    surname = surname.toLowerCase()
    return person.name.toLowerCase() === name && person.surname.toLowerCase() === surname
  })

const findElement = selector => $(selector);

const resetSpotlight = () => {
  const $spotlightFieldSelectors = [
    `.js-spotlight-name`,
    `.js-spotlight-role`,
    `.js-spotlight-city`,
    `.js-spotlight-bio`
  ];
  // reset text fields
  $spotlightFieldSelectors.forEach(selector => {
    const $el = findElement(selector);
    $el.text('')
  });
  // reset image field
  const $spotlightImage = findElement('.js-spotlight-image');
  $spotlightImage.addClass(`placeholder`);
  $spotlightImage.removeClass(`hidden`);
  $spotlightImage.css('background-image', ``);
}

const injectSpotlightData = member => {
  const $spotlightName = findElement(`.js-spotlight-name`);
  const $spotlightRole = findElement(`.js-spotlight-role`);
  const $spotlightAge = findElement(`.js-spotlight-age`);
  const $spotlightCity = findElement(`.js-spotlight-city`);
  const $spotlightBio = findElement(`.js-spotlight-bio`);
  const $spotlightTestimonial = findElement(`.js-spotlight-testimonial`);

  // insert text data
  $spotlightName.text(`${member.name} ${member.surname}`)
  $spotlightRole.text(member.title)
  $spotlightCity.text(member.city)
  $spotlightAge.text(member.age)
  $spotlightBio.text(member.bio)
  $spotlightTestimonial.text(member.testimonial)

  // insert image data
  const $spotlightImage = $(`.js-spotlight-image`);
  if(member.picture && member.picture.length > 0) {
      $spotlightImage.removeClass(`placeholder`);
      $spotlightImage.css('background-image', `url(${member.picture})`);
  } else {
    $spotlightImage.addClass('hidden');
  }
}

const showTeamMemberDetails = (e) => {
  try {
    // grab data
    const {name = null, surname = null} = e.target.dataset;
    const teamMember = findMemberData(name, surname);

    // wipe current spotlight
    const $spotlight = findElement('.js-spotlight')
    $spotlight.addClass('hidden');
    resetSpotlight();
    $spotlight.height() // force layout re-draw

    // add new data
    injectSpotlightData(teamMember);

    // show the new data
    $spotlight.removeClass('hidden');
    window.scrollTo({
      top: 0,
      left: 0
    });
  } catch (err) {
    console.warn(err);
  }
}

const cardOver = (e) => {
  $(e.target).closest('.js-team-card').addClass('over');
}

const cardOut = (e) => {
  $(e.target).closest('.js-team-card').removeClass('over');
}
  
export default () => {
    const $detailShowBtn = $('.js-team-spotlight-show');
    const $teamMemberCard = $('.js-team-card');
    $detailShowBtn.click(showTeamMemberDetails);
    $teamMemberCard.hover(cardOver, cardOut);
  }
  