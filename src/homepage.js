$(document).ready(() => {
  gsap.registerPlugin(ScrollTrigger, Flip);

  // GSAP IMG SET
  $('img').each(function () {
    $(this).removeAttr('loading');
    ScrollTrigger.refresh();
  });

  // ----- HERO Animation
  // Elems
  let dashboard = $('.hp-flow_visual-block');
  let phone = $('.hp-flow_visual-phone');
  let cards = $('.hp-flow_visual-card');
  let tags = $('.hp-flow_tags');
  let stats = $('.hp-flow_stats');
  let clients = $('.hp-flow_clients');
  let intro = $('.hp-flow_avatar-intro');
  let actions = $('.hp-flow_avatar-action');
  let generateBtn = $('.hp-flow_visual-button');

  let patternClass = '.hp-flow_pattern';

  let allowStyles = false;

  // Functions
  const trigger = (trigger, start, end, additionalConfig = {}) => {
    return gsap.timeline({
      scrollTrigger: {
        trigger: $(trigger),
        start: start,
        end: end,
        markers: true,
        invalidateOnRefresh: true,
        yoyo: true,
        ...additionalConfig,
      },
    });
  };

  const updateStylesPerms = (state) => {
    allowStyles = state;
    console.log(allowStyles);
  };

  // Animation
  const cardsReveal = (card) => {
    let tl = gsap.timeline();
    let index = cards.index(card);

    console.log(index);

    let moves = ['-15em', '-10em', '10em', '5em'];

    tl.fromTo(
      card,
      {
        opacity: 0,
        x: moves[index],
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.75,
      }
    );

    return tl;
  };

  const step1 = (parent) => {
    let tl = gsap.timeline();
    // Cards Reveal
    cards = $(parent).find(cards);
    tl.add(cardsReveal($(parent).find(cards).eq(0)), '<');
    tl.add(cardsReveal($(parent).find(cards).eq(1)), '<');
    tl.add(cardsReveal($(parent).find(cards).eq(2)), '<');
    tl.add(cardsReveal($(parent).find(cards).eq(3)), '<');

    return tl;
  };

  const step2 = (parent) => {
    let tl = gsap.timeline();
    // Cards Hide
    tl.to($(parent).find(cards), {
      opacity: 0,
      scale: 0.8,
      stagger: {
        each: 0.02,
      },
      duration: 0.75,
    });
    // Pattern
    tl.fromTo(
      `${parent} ${patternClass}._1`,
      {
        xPercent: -50,
        yPercent: 50,
        opacity: 0,
      },
      {
        xPercent: 0,
        yPercent: 0,
        opacity: 1,
      },
      '<'
    );
    tl.fromTo(
      [`${parent} ${patternClass}._2`, `${parent} ${patternClass}._4`],
      {
        scale: 0.5,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
      },
      '<'
    );
    tl.fromTo(
      `${parent} ${patternClass}._3`,
      {
        xPercent: 50,
        yPercent: -50,
        opacity: 0,
      },
      {
        xPercent: 0,
        yPercent: 0,
        opacity: 1,
      },
      '<'
    );
    // Left Blocks Reveal
    tl.fromTo(
      [$(parent).find(tags), $(parent).find(stats), $(parent).find(clients)],
      {
        opacity: 0,
        x: '-5em',
      },
      {
        opacity: 1,
        x: 0,
        stagger: {
          each: 0.2,
        },
        duration: 0.5,
      },
      '<0.5'
    );
    // Right Blocks Reveal
    tl.fromTo(
      [$(parent).find(intro), $(parent).find(actions)],
      {
        opacity: 0,
        x: '5em',
      },
      {
        opacity: 1,
        x: 0,
        stagger: {
          each: 0.2,
        },
        duration: 0.5,
      },
      '<'
    );
    // Generate Button Reval
    tl.fromTo(
      $(parent).find(generateBtn),
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
      },
      '<'
    );

    return tl;
  };

  const step3 = (parent) => {
    let tl = gsap.timeline();

    // Pattern Hides
    tl.to(`${parent} ${patternClass}._1`, {
      xPercent: -50,
      yPercent: 50,
      opacity: 0,
    });
    tl.to(
      `${parent} ${patternClass}._2`,
      {
        scale: 0.5,
        opacity: 0,
      },
      '<'
    );
    tl.to(
      `${parent} ${patternClass}._3`,
      {
        xPercent: 50,
        yPercent: -50,
        opacity: 0,
      },
      '<'
    );
    // Pattern Shows
    tl.fromTo(
      `${parent} ${patternClass}._5`,
      {
        xPercent: -50,
        yPercent: 50,
        opacity: 0,
      },
      {
        xPercent: 0,
        yPercent: 0,
        opacity: 1,
      },
      '<'
    );
    tl.fromTo(
      `${parent} ${patternClass}._6`,
      {
        xPercent: -50,
        opacity: 0,
      },
      {
        xPercent: 0,
        opacity: 1,
      },
      '<'
    );
    // Flip Button
    tl.fromTo(
      $(parent).find(generateBtn),
      { width: '22.7em', height: '5.3em', y: 0, x: 0 },
      {
        width: '17em',
        height: '22em',
        y: '-20em',
        x: '17em',
        onComplete: () => {
          updateStylesPerms(true);
        },
        onReverseComplete: () => {
          updateStylesPerms(false);
          updateStyle(true, parent);
        },
      },
      '<'
    );
    tl.fromTo(
      $(parent).find('.hp-flow_visual-button-inner'),
      {
        opacity: 1,
      },
      {
        keyframes: {
          '4%': {
            opacity: 0,
          },
        },
      },
      '<'
    );
    tl.fromTo(
      $(parent).find('.hp-flow_styles-inner'),
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );

    return tl;
  };

  const step4 = (parent) => {
    let tl = gsap.timeline();
    // Device Flip
    tl.fromTo(
      $(parent).find(dashboard),
      {
        display: 'block',
        opacity: 1,
        yPercent: 0,
      },
      {
        display: 'none',
        opacity: 0,
        yPercent: -10,
        duration: 0.3,
      }
    );
    tl.fromTo(
      $(parent).find(phone),
      {
        display: 'none',
        opacity: 0,
        yPercent: 10,
      },
      {
        display: 'block',
        opacity: 1,
        yPercent: 0,
        duration: 0.3,
      }
    );
    // Pattern
    tl.fromTo(
      `${parent} ${patternClass}._7`,
      {
        xPercent: -50,
        yPercent: 50,
        opacity: 0,
      },
      {
        xPercent: 0,
        yPercent: 0,
        opacity: 1,
      }
    );
    tl.fromTo(
      `${parent} ${patternClass}._8`,
      {
        xPercent: 50,
        opacity: 0,
      },
      {
        xPercent: 0,
        opacity: 1,
      },
      '<'
    );
    // Button Click
    tl.fromTo(
      $(parent).find('.hp-flow_visual-phone_card-button').eq(1),
      {
        scale: 1,
      },
      {
        scale: 0.9,
        delay: 0.5,
      }
    );
    tl.fromTo(
      $(parent).find('.hp-flow_visual-phone_card'),
      {
        rotate: 0,
        xPercent: 0,
      },
      {
        rotate: '7deg',
        xPercent: 120,
      }
    );
    tl.fromTo(
      $(parent).find('.hp-flow_visual-phone_check'),
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
      }
    );
    tl.fromTo(
      $(parent).find('.hp-flow_visual-phone_check-icon'),
      {
        opacity: 0,
        scale: 2,
      },
      {
        opacity: 1,
        scale: 1,
      },
      '<0.1'
    );
    return tl;
  };

  ScrollTrigger.matchMedia({
    // large
    '(min-width: 992px)': function () {
      let main = gsap.timeline();
      let visual = '.hp-flow_visual.desktop';

      // First Step
      main.addLabel('Step 1 Starts');
      main.add(step1(visual), '<');
      main.addLabel('Step 1 Ends');
      // Second Step
      main.addLabel('Step 2 Starts');
      main.add(step2(visual));
      main.addLabel('Step 2 Ends');
      // Third Step
      main.addLabel('Step 3 Starts');
      main.add(step3(visual));
      main.addLabel('Step 3 Ends');
      // Forth Step
      main.addLabel('Step 4 Starts');
      main.add(step4(visual));
      main.addLabel('Step 4 Ends');

      // Scroll Trigger
      let flowContents = document.querySelectorAll('.hp-flow_content-inner');

      flowContents.forEach((content, index) => {
        // Define the start and end labels for each ScrollTrigger
        let startLabel = `Step ${index + 1} Starts`;
        let endLabel = `Step ${index + 1} Ends`;

        ScrollTrigger.create({
          animation: main,
          trigger: content,
          start: 'bottom bottom',
          // Use the labels in the timeline for each ScrollTrigger
          markers: true,
          onEnter: ({ progress, direction, isActive }) => {
            if (direction === 1) {
              main.tweenFromTo(startLabel, endLabel);
            }
          },
          onLeaveBack: ({ progress, direction, isActive }) => {
            if (direction === -1) {
              main.tweenFromTo(endLabel, startLabel);
            }
          },
        });
      });
    },

    // medium
    '(max-width: 991px)': function () {
      let main = gsap.timeline();

      // First Step
      main.addLabel('Step 1 Starts');
      main.add(step1('.hp-flow_content-visual'), '<');
      main.addLabel('Step 1 Ends');
      // Second Step
      main.addLabel('Step 2 Starts');
      main.add(step2('.hp-flow_content-visual'));
      main.addLabel('Step 2 Ends');
      // Third Step
      main.addLabel('Step 3 Starts');
      main.add(step3('.hp-flow_content-visual._3'));
      main.addLabel('Step 3 Ends');
      // Forth Step
      main.addLabel('Step 4 Starts');
      main.add(step4('.hp-flow_content-visual'));
      main.addLabel('Step 4 Ends');

      // Scroll Trigger
      let flowContents = document.querySelectorAll('.hp-flow_content-inner');

      flowContents.forEach((content, index) => {
        // Define the start and end labels for each ScrollTrigger
        let startLabel = `Step ${index + 1} Starts`;
        let endLabel = `Step ${index + 1} Ends`;

        ScrollTrigger.create({
          animation: main,
          trigger: content,
          start: 'top bottom',
          // Use the labels in the timeline for each ScrollTrigger
          markers: true,
          onEnter: ({ progress, direction, isActive }) => {
            if (direction === 1) {
              main.tweenFromTo(startLabel, endLabel);
            }
          },
          onLeaveBack: ({ progress, direction, isActive }) => {
            if (direction === -1) {
              main.tweenFromTo(endLabel, startLabel);
            }
          },
        });
      });
    },
  });

  // Styles Carousel
  let currentStyle = 0;
  let styleButton = $('.hp-flow_visual-button');

  function updateStyle(reset, parent) {
    let styleVisuals = $(parent).find('.hp-flow_visual-static');
    let styleBox = $(parent).find('.hp-flow_styles-bg');

    if (reset === true) {
      if (currentStyle === 0) {
        return; // Return early if already at index 0
      }
      currentStyle = 0; // Reset currentStyle to 0 index
    } else {
      if (allowStyles) {
        currentStyle = (currentStyle + 1) % $(styleVisuals).length;
      }
    }

    if (allowStyles || reset === true) {
      styleVisuals
        .add(styleBox)
        .stop()
        .fadeOut('fast')
        .promise()
        .done(function () {
          styleVisuals.eq(currentStyle).fadeIn();
          styleBox.eq(currentStyle).fadeIn();
        });
    }
  }

  styleButton.on('click', () => {
    if (window.matchMedia('(max-width: 991px)').matches) {
      updateStyle(false, $('.hp-flow_content-visual._3'));
    } else {
      updateStyle(false, $('.hp-flow_col.visual'));
    }
  });
});
