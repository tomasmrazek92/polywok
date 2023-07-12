$(document).ready(() => {
  gsap.registerPlugin(ScrollTrigger, Flip);

  // GSAP IMG SET
  $('img').each(function () {
    $(this).removeAttr('loading');
    ScrollTrigger.refresh();
  });

  // ----- HERO Animation
  ScrollTrigger.matchMedia({
    // Have the animation only on desktop
    '(min-width: 992px)': function () {
      // Elems
      let cards = $('.hp-flow_visual-card');
      let tags = $('.hp-flow_tags');
      let stats = $('.hp-flow_stats');
      let clients = $('.hp-flow_clients');
      let intro = $('.hp-flow_avatar-intro');
      let actions = $('.hp-flow_avatar-action');
      let generateBtn = $('.hp-flow_visual-button');

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

      let tl = gsap.timeline();

      // First Step
      tl.addLabel('Step 1 Starts');
      // Cards Reveal
      tl.add(cardsReveal(cards.eq(0)), '<');
      tl.add(cardsReveal(cards.eq(1)), '<');
      tl.add(cardsReveal(cards.eq(2)), '<');
      tl.add(cardsReveal(cards.eq(3)), '<');
      tl.addLabel('Step 1 Ends');
      // Second Step
      tl.addLabel('Step 2 Starts');
      // Cards Hide
      tl.to(cards, {
        opacity: 0,
        scale: 0.8,
        stagger: {
          each: 0.02,
        },
        duration: 0.75,
      });
      // Left Blocks Reveal
      tl.fromTo(
        [tags, stats, clients],
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
        [intro, actions],
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
      tl.fromTo(generateBtn, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1 }, '<');
      tl.addLabel('Step 2 Ends');
      // Third Step
      tl.addLabel('Step 3 Starts');
      // Flip Button
      tl.fromTo(
        generateBtn,
        { width: '22.7em', height: '5.3em', y: 0, x: 0 },
        { width: '17em', height: '22em', y: '-20em', x: '17em' }
      );
      tl.fromTo(
        '.hp-flow_visual-button-inner',
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
        '.hp-flow_styles-inner',
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      );
      tl.addLabel('Step 3 Ends');

      // Scroll Trigger
      let flowContents = document.querySelectorAll('.hp-flow_content');

      flowContents.forEach((content, index) => {
        // Define the start and end labels for each ScrollTrigger
        let startLabel = `Step ${index + 1} Starts`;
        let endLabel = `Step ${index + 1} Ends`;

        ScrollTrigger.create({
          animation: tl,
          trigger: content,
          start: 'center center',
          // Use the labels in the timeline for each ScrollTrigger
          markers: true,
          onEnter: ({ progress, direction, isActive }) => {
            if (direction === 1) {
              tl.tweenFromTo(startLabel, endLabel);
            }
          },
          onLeaveBack: ({ progress, direction, isActive }) => {
            if (direction === -1) {
              tl.tweenFromTo(endLabel, startLabel);
            }
          },
          // Uncomment this if you want the timeline to reset when it's not in the viewport.
          // onLeave: () => tl.progress(0)
        });
      });
    },
  });
});
