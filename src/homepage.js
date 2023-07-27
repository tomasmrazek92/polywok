$(document).ready(() => {
  gsap.registerPlugin(ScrollTrigger);

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

  const updateStep3StylesPerms = (state) => {
    allowStyles = state;
  };

  // Animation
  const cardsReveal = (card) => {
    let tl = gsap.timeline();
    let index = cards.index(card);

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
    // Generate Button Reval
    tl.fromTo(
      $(parent).find(generateBtn),
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        onComplete: () => {
          updateStep3StylesPerms(true);
        },
        onReverseComplete: () => {
          updateStep3StylesPerms(false);
          updateStep3Style(true, parent);
        },
      },
      '<'
    );

    return tl;
  };

  const deviceFlip = (parent) => {
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
    return tl;
  };

  const step4 = (parent) => {
    let tl = gsap.timeline();

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

      let deviceFlipAnim = gsap.timeline({
        paused: true,
        scrollTrigger: {
          trigger: flowContents[3],
          start: 'bottom bottom',
          onEnter: () => {
            deviceFlipAnim.play();
          },
          onLeaveBack: () => {
            deviceFlipAnim.reverse();
          },
        },
      });
      deviceFlipAnim.add(deviceFlip(visual));
    },

    // medium
    '(max-width: 991px)': function () {
      let main = gsap.timeline();

      // First Step
      main.addLabel('Step 1 Starts');
      main.add(step1('.hp-flow_content-visual._1'), '<');
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
      main.add(step4('.hp-flow_content-visual._4'));
      main.addLabel('Step 4 Ends');

      // Scroll Trigger
      let flowContents = document.querySelectorAll('.hp-flow_content-inner');

      // Add a flag for each step
      let hasAnimated = [false, false, false, false];

      flowContents.forEach((content, index) => {
        // Define the start and end labels for each ScrollTrigger
        let startLabel = `Step ${index + 1} Starts`;
        let endLabel = `Step ${index + 1} Ends`;

        ScrollTrigger.create({
          animation: main,
          trigger: content,
          start: 'top bottom',
          // Use the labels in the timeline for each ScrollTrigger
          onEnter: ({ progress, direction, isActive }) => {
            if (direction === 1 && !hasAnimated[index]) {
              main.tweenFromTo(startLabel, endLabel);
              hasAnimated[index] = true;
            }
          },
        });
      });
    },
  });

  // Hero Carousel
  let isScrolling;
  let heroCurrent = 0;
  let heroButton = $('.hp_hero-container-wrap .hp-flow_visual-button');
  let heroVisuals = $('.hp_hero-template');
  let heroStyleBoxes = $('.hp_hero-container-wrap .hp-flow_styles-bg');
  let heroAnimationTrigger = $('[hero-template]');
  let heroInterval;

  function updateHeroStyle() {
    heroButton.addClass('disabled');

    heroCurrent = (heroCurrent + 1) % $(heroVisuals).length;

    heroVisuals
      .add(heroStyleBoxes)
      .stop()
      .fadeOut('fast')
      .promise()
      .then(() => {
        let index = heroCurrent === 0 ? heroVisuals.length - 1 : heroCurrent - 1;
        return heroVisuals.eq(index).find(heroAnimationTrigger).trigger('click').promise();
      })
      .then(() => {
        return Promise.all([
          heroStyleBoxes.eq(heroCurrent).fadeIn('fast').promise(),
          heroVisuals.eq(heroCurrent).fadeIn('fast').promise(),
        ]);
      })
      .then(() => {
        return heroVisuals.eq(heroCurrent).find(heroAnimationTrigger).trigger('click').promise();
      })
      .then(() => {
        return heroButton.removeClass('disabled');
      })
      .catch((err) => {
        console.log('An error occurred: ', err);
      });
  }
  function startHeroInterval() {
    // If interval is already set, clear it.
    if (heroInterval) {
      clearInterval(heroInterval);
      updateHeroStyle();
    }

    // Set interval for function to run every 3 seconds.
    heroInterval = setInterval(function () {
      updateHeroStyle();
    }, 4000);
  }

  // Actions on Load
  heroVisuals.eq(0).find(heroAnimationTrigger).trigger('click');
  startHeroInterval();

  // Clicks
  heroButton.on('click', () => {
    startHeroInterval();
  });

  // Step 3 - Styles Carousel
  let step3Current = 0;
  let step3StyleButton = $('.hp-flow_visual .hp-flow_visual-button');
  let desktoParent = $('.hp-flow_col.visual');
  let respoParent = $('.hp-flow_content-visual._3');
  let step3Interval;

  function updateStep3Style(reset, parent) {
    let styleVisuals = $(parent).find('.hp-flow_visual-static');
    let styleBox = $(parent).find('.hp-flow_styles-bg');

    if (reset === true) {
      if (step3Current === 0) {
        return; // Return early if already at index 0
      }
      step3Current = 0; // Reset step3Current to 0 index
    } else {
      if (allowStyles) {
        step3Current = (step3Current + 1) % $(styleVisuals).length;
      }
    }

    if (allowStyles || reset === true) {
      styleVisuals
        .add(styleBox)
        .stop()
        .fadeOut('fast')
        .promise()
        .done(function () {
          styleVisuals.eq(step3Current).fadeIn();
          styleBox.eq(step3Current).fadeIn();
        });
    }
  }

  function startStep3Interval(parent) {
    // If interval is already set, clear it.
    if (step3Interval) {
      clearInterval(step3Interval);
      updateStep3Style(false, parent);
    }

    // Set interval for function to run every 3 seconds.
    step3Interval = setInterval(function () {
      updateStep3Style(false, parent);
    }, 3000);
  }

  // Click
  step3StyleButton.on('click', () => {
    if (window.matchMedia('(max-width: 991px)').matches) {
      startStep3Interval(respoParent);
    } else {
      startStep3Interval(desktoParent);
    }
  });

  // Call the function to start the interval as soon as the script runs.
  if (window.matchMedia('(max-width: 991px)').matches) {
    startStep3Interval(respoParent);
  } else {
    startStep3Interval(desktoParent);
  }

  // ----- Cards Animations
  // Card 1
  let card1Cards = $('[card1-card]');
  let card1Paragraph = card1Cards.find('p');
  let card1Dot = $('.hp-feature-1_dot');
  let card1TextDot = $('.hp-feature-1_text-dot');

  const text = new SplitType(card1Paragraph, { types: 'words, chars' });

  let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: '[card-1]',
      start: '20% bottom',
    },
    defaults: {
      ease: Expo.easeOut,
    },
  });

  tl1.set(card1Paragraph, {
    opacity: 0,
  });
  tl1.fromTo(
    card1Cards.eq(0),
    { x: '-2.4rem', scale: 0.85, opacity: 0 },
    {
      x: 0,
      scale: 1,
      opacity: 1,
      duration: 0.5,
    }
  );
  tl1.fromTo(
    card1Dot,
    {
      scale: 0.85,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
    },
    '<'
  );
  tl1.set(
    card1Paragraph,
    {
      opacity: 1,
    },
    '<'
  );
  tl1.to(
    $(card1Paragraph).eq(0).find('.char'),
    {
      visibility: 'visible',
      stagger: {
        each: 0.025,
      },
    },
    '<'
  );
  tl1.fromTo(
    card1Cards.eq(1),
    { x: '-2.4rem', scale: 0.85, opacity: 0 },
    {
      x: 0,
      scale: 1,
      opacity: 1,
      duration: 0.5,
    },
    '>-0.4'
  );
  tl1.to(
    $(card1Paragraph).eq(1).find('.char'),
    {
      visibility: 'visible',
      stagger: {
        each: 0.025,
      },
    },
    '>-0.5'
  );
  tl1.fromTo(card1TextDot, { scale: 0 }, { scale: 1, duration: 0.2 }, '>-0.5');

  // Card 3
  const animateCounter = ($element) => {
    $($element).each(function () {
      const Cont = { val: 1 };
      const originalText = $(this).text();
      const targetValue = parseFloat(originalText);

      // Determine the number of decimal places in the original value
      const decimalPlaces = (originalText.split('.')[1] || []).length;

      if (!isNaN(targetValue)) {
        // Hide the element before the animation starts
        $(this).css('visibility', 'hidden');
        const onUpdate = () => {
          let formattedValue;

          if (Math.abs(targetValue - Cont.val) <= 0.01) {
            formattedValue = parseFloat(targetValue.toFixed(decimalPlaces));
          } else {
            formattedValue = parseFloat(Cont.val.toFixed(decimalPlaces));
          }

          $(this).text(formattedValue);
        };

        TweenLite.to(Cont, 3, {
          val: targetValue,
          onUpdate: onUpdate,
          onStart: () => $(this).css('visibility', 'visible'),
        });
      } else {
        return;
      }
    });
  };

  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: '[card-3]',
      start: '20% bottom',
    },
    defaults: {
      ease: Expo.easeOut,
    },
  });

  tl3.call(() => {
    animateCounter($('.hp-feature-3_value'));
    animateCounter($('.hp-feature-3_date'));
  });

  // Card 4
  let urls = [
    'www.google.com',
    'www.youtube.com',
    'www.tesla.com',
    'www.apple.com',
    'www.webflow.com',
  ];

  let urlIndex = 0;
  let split;

  let parentContainer = document.querySelector('.hp-feature-4_address-inner');

  function typeNextUrl() {
    if (urlIndex >= urls.length) {
      urlIndex = 0; // Restart from the first URL
    }

    let url = urls[urlIndex++];

    // Create a new container for each URL
    let container = document.createElement('div');
    container.textContent = url;

    // Append the new container to the parent container
    parentContainer.innerHTML = '';
    parentContainer.appendChild(container);

    let split = new SplitType(container, { types: 'chars' });

    // Animate the characters
    let tl = gsap.timeline();
    tl.fromTo(
      $(split.chars),
      {
        display: 'none',
      },
      {
        display: 'inline-block',
        visibility: 'visible',
        ease: 'power2',
        stagger: 0.05,
        onComplete: () => {
          // Setup a ticker to check for scrolling
          let myTicker = gsap.ticker.add(function () {
            // Check if isScrolling is false
            if (!isScrolling) {
              // Remove the ticker to stop the loop
              myTicker.kill();

              // Wait for 1 second before typing the next URL
              gsap.delayedCall(1, typeNextUrl);
            }
          });
        },
      }
    );
  }

  typeNextUrl(); // Start typing

  // Scroll Fix
  let debounceTimer;

  // Function to be called after scrolling stops
  function hasStoppedScrolling() {
    // No more scrolling
    isScrolling = false;
  }

  // Listen for scroll events
  window.addEventListener(
    'scroll',
    function () {
      // Scrolling is happening
      if (!isScrolling) {
        isScrolling = true;
      }

      // Clear the timeout if it's already been set.
      clearTimeout(debounceTimer);

      // Set a timeout to run after scrolling ends
      debounceTimer = setTimeout(hasStoppedScrolling, 500);
    },
    false
  );
});
