import { Link } from 'react-router-dom';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

const stories = [
  {
    name: 'Oscar',
    slide: 'oscar-after.jpg',
    beforePhoto: 'oscar-before.jpg',
    tag: 'Nutritional Recuperation',
    summary: '14.08 lbs at 10 months → 26.4 lbs',
    body: [
      'When 10-month-old Oscar entered our recuperation program, he was severely underweight at only 14.08 lbs and suffering from fever and intestinal problems that affected his growth.',
      'His mother, Julia, is a single mother of three who works hard to make ends meet by selling tortillas in her neighborhood. Already faced with heavy daily challenges, caring for a starving, sick child added tremendous burdens.',
      'Oscar graduated from our program weighing 26.4 lbs and looking healthier and happier than ever. We hope that seeing him grow strong will mean one less worry for Julia.',
    ],
  },
  {
    name: 'Guadalupe & Dilan',
    slide: 'guadalupe-with-dilan.jpg',
    beforePhoto: 'dilan-alone.jpg',
    noLabels: true,
    tag: 'In Progress',
    summary: '5.28 lbs at 1 month — enrolled February 2026',
    body: [
      'In February 2026, Guadalupe walked two hours with her mother and baby Dilan to be seen at the Narú Medical Center.',
      'When asked how she had heard of Narú, Guadalupe said: "Everyone knows that if you have a baby that is not gaining weight, Narú is the only place that can help you."',
      'Dilan was severely malnourished — 5.28 lbs at one month old. He was enrolled in the program that day. We look forward to sharing his graduation photo.',
    ],

  },
  {
    name: 'Lesvia',
    slide: 'lesvia-after.jpg',
    beforePhoto: 'lesvia-before.png',
    tag: 'Nutritional Recuperation',
    summary: 'Severely malnourished as an infant → thriving at 10 years old',
    beforeCaption: 'Lesvia\'s Narú admission Carnet — enrolled as a young child',
    afterCaption: 'Lesvia (on the left) at 10 years old, with her mother and sister',
    elenaStyle: true,
    noLabels: true,
    body: [
      'The day a Humble Village team arrived in a remote jungle community to construct a USANA Garden Tower, the whole neighborhood came out to watch. Kids flooded the clearing. A volunteer organized a pickup baseball game. Another pulled out a Polaroid camera and began photographing the families gathered around, handing each portrait directly to its subjects. For many, it was the first time they had ever seen themselves in a photograph.',
      'Roberto Mendoza, Narú\'s Field Manager, quietly pointed to a girl standing nearby — about ten years old, watching the commotion with her mother and baby sister. He mentioned she had been on the Narú Nutrition Program when she was very small. Upon returning to the Medical Center, he found her original Carnet — her admission card into the program, with her photo taken at the time of enrollment.',
      'In Guatemala, if a malnourished child can survive to age five — when school begins and one daily meal is guaranteed — their chances change dramatically. Narú\'s job is to get them there. Lesvia made it.',
    ],
  },
  {
    name: 'Jhordan',
    slide: 'jhordan-after.png',
    beforePhoto: 'jhordan-before-2.png',
    tag: 'Nutritional Recuperation',
    summary: '9.4 lbs at 17 months → 22.9 lbs',
    body: [
      'Jhordan entered our Nutrition Program in critical condition — severely malnourished with stunted growth, battling diarrhea and a urinary tract infection.',
      'With consistent nutritional support, medical treatment, and close follow-ups, Jhordan gradually improved. One December, during the wet and cold season, he developed pneumonia. Thankfully, he was successfully treated at our Solly clinic with nebulization and antibiotics.',
      'Narú nurses regularly visited his mother Claudia, giving her the tools and knowledge to care for him. One year later, Jhordan graduated the program with a story of resilience and full recovery.',
    ],
  },
  {
    name: 'Angel',
    slide: 'angel-after.png',
    beforePhoto: 'angel-before-1.png',
    tag: 'Nutritional Recuperation',
    summary: 'Severely underweight → thriving at 4 years old',
    body: [
      'Angel entered our Nutrition Program severely underweight and suffering from scabies. His mother, Karla, was just 14 years old and in need of support herself.',
      'With care, nutrition, and medical treatment, Angel began to recover. At six months old, he progressed from formula to Incaparina as part of his nutritional support.',
      'When his maternal grandmother stepped in to raise him, the Narú team continued to walk alongside Angel\'s family. Today, Angel has graduated at a healthy weight — walking, growing, and thriving.',
    ],
    quote: "Angel's story is no longer one of survival but of possibility.",
  },
  {
    name: 'Evelin',
    slide: 'evelin-after.png',
    beforePhoto: 'evelin-before-2.png',
    tag: 'Maternal & Infant Nutrition',
    summary: 'Severely malnourished at 2 months → happily growing',
    body: [
      'Feliza came to the Narú Medical Center seeking help for her daughter Evelin. At just two months old, Evelin was already severely malnourished and at serious risk.',
      'With limited resources and unable to produce sufficient breastmilk, Feliza had been desperately feeding Evelin coffee and corn flour — foods lacking essential nutrients for infants.',
      'Since joining the program, Feliza began receiving Incaparina to support her own nutrition and milk production, while Evelin is closely monitored as she continues her recovery. Evelin is now happily growing.',
    ],
  },
  {
    name: 'Bertha',
    slide: 'bertha-after.png',
    beforePhoto: 'bertha-before-2.png',
    tag: 'Nutritional Recuperation',
    summary: '9.7 lbs at 8 months → healthy weight 11 months later',
    body: [
      'During a community follow-up visit, a Narú nurse was informed about Bertha — a severely underweight infant weighing just 9.7 lbs at eight months old.',
      'Bertha\'s mother had very little milk and was struggling to provide adequate nutrition. Through the Narú Nutrition Program, Bertha began receiving nutritional support while her mother received guidance and care.',
      'With continued home visits and support from Narú nurses, Bertha\'s health steadily improved. Eleven months later, Bertha reached a healthy weight and is now growing and thriving.',
    ],
  },
];

export default function Stories() {
  return (
    <main>
      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <img
          src={`${BASE}/images/home-interior.webp`}
          alt="A Q'eqchi' Maya mother and child in their home"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,14,8,0.72)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto', padding: '160px 40px 100px' }}>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#C8B59E',
            marginBottom: '28px',
          }}>
            Impact Stories
          </p>
          <h1 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(30px, 4.5vw, 56px)',
            fontWeight: 400,
            color: '#F6F3EC',
            marginBottom: '28px',
            lineHeight: 1.15,
            fontStyle: 'italic',
          }}>
            Hunger to Hope
          </h1>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#C8B59E',
            marginBottom: '36px',
          }}>
            A Few Stories of Thousands
          </p>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '18px', lineHeight: 1.85, color: '#F6F3EC', opacity: 0.8 }}>
            Over 274 children reached a healthy weight in 2025 alone. Every number is a name. Every name is a story. Here are a few of them.
          </p>
        </div>
      </section>

      {/* ELENA — ANCHOR STORY */}
      <section style={{ background: '#F8F3EC', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="elena-story-grid">
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', color: '#574C3F', marginBottom: '8px', textAlign: 'center' }}>BEFORE</div>
                <img src={`${BASE}/images/elena-before.jpg`} alt="Jeremia and Gerson — Elena would not leave the corner" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', borderRadius: '4px' }} />
                <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', color: '#36302A', marginTop: '6px', textAlign: 'center', fontStyle: 'italic', lineHeight: 1.4 }}>
                  Twins Jeremia & Gerson with their Aunt and Grandmother. Elena, not pictured.
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', color: '#574C3F', marginBottom: '8px', textAlign: 'center' }}>AFTER</div>
                <img src={`${BASE}/images/elena-after.jpg`} alt="Elena with her boys today" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', borderRadius: '4px' }} />
                <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', color: '#36302A', marginTop: '6px', textAlign: 'center', fontStyle: 'italic', lineHeight: 1.4 }}>
                  7 years later, Elena with her boys today.
                </p>
              </div>
            </div>
            <div>
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#574C3F', marginBottom: '16px' }}>
                Nutritional Recuperation
              </p>
              <h2 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, color: '#36302A', marginBottom: '28px', fontStyle: 'italic', lineHeight: 1.2 }}>
                From Desperation to Dignity
              </h2>
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', lineHeight: 1.85, color: '#574C3F', marginBottom: '18px' }}>
                When Lauren and her team visited this humble home, they found two severely malnourished babies with only days to live.
              </p>
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', lineHeight: 1.85, color: '#574C3F', marginBottom: '18px' }}>
                Elena, malnourished herself, could not produce milk. She fed her babies corn water — it only made things worse. With expected burials approaching, she emotionally detached from her boys and resigned herself to hiding in the corner of the room, too ashamed to emerge.
              </p>
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', lineHeight: 1.85, color: '#574C3F', marginBottom: '28px' }}>
                The twins were immediately admitted into our nutrition program. Gerson was diagnosed with a tongue tie, a correctable condition, and received life-saving care. Elena entered the self-reliance program at the Narú Training Center, gaining tools, skills, and support to pull herself and her family out of poverty.
              </p>
              <p style={{ fontFamily: 'Libre Baskerville, serif', fontSize: '20px', fontStyle: 'italic', color: '#36302A', lineHeight: 1.5 }}>
                Healthy boys. A thriving home. And Elena—empowered and independent—is now a leader in her community.
              </p>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) {
              .elena-story-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* REMAINING STORIES */}
      {stories.map((story, i) => (
        <section
          key={i}
          style={{ background: i % 2 === 0 ? '#36302A' : '#F8F3EC', padding: '80px 40px' }}
        >
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '60px',
              alignItems: 'center',
            }} className={`story-grid-${i}`}>
              <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                {story.beforePhoto && (story as any).elenaStyle ? (
                  // Elena-style: side-by-side with BEFORE/AFTER labels above, caramel italic captions below
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', color: '#C8B59E', marginBottom: '8px', textAlign: 'center' }}>BEFORE</div>
                      <img
                        src={`${BASE}/images/${story.beforePhoto}`}
                        alt={`${story.name} — before`}
                        style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'top', borderRadius: '4px', display: 'block' }}
                      />
                      <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', color: '#C8B59E', marginTop: '6px', textAlign: 'center', fontStyle: 'italic', lineHeight: 1.4 }}>{(story as any).beforeCaption}</p>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', color: '#C8B59E', marginBottom: '8px', textAlign: 'center' }}>AFTER</div>
                      <img
                        src={`${BASE}/images/${story.slide}`}
                        alt={`${story.name} — after`}
                        style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'top', borderRadius: '4px', display: 'block' }}
                      />
                      <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', color: '#C8B59E', marginTop: '6px', textAlign: 'center', fontStyle: 'italic', lineHeight: 1.4 }}>{(story as any).afterCaption}</p>
                    </div>
                  </div>
                ) : story.beforePhoto && (story as any).noLabels ? (
                  // Two-photo layout: no before/after labels (story gallery)
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ flex: 1 }}>
                      <img
                        src={`${BASE}/images/${story.beforePhoto}`}
                        alt={`${story.name} — photo 1`}
                        style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'top', borderRadius: '4px', display: 'block' }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <img
                        src={`${BASE}/images/${story.slide}`}
                        alt={`${story.name} — photo 2`}
                        style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'top', borderRadius: '4px', display: 'block' }}
                      />
                    </div>
                  </div>
                ) : story.beforePhoto ? (
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ flex: 1 }}>
                      <img
                        src={`${BASE}/images/${story.beforePhoto}`}
                        alt={`${story.name} — before`}
                        style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'top', borderRadius: '4px', display: 'block' }}
                      />
                      <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', color: '#36302A', marginTop: '6px', textAlign: 'center', textTransform: (story as any).beforeCaption ? 'none' : 'uppercase' }}>{(story as any).beforeCaption || 'Before'}</p>
                    </div>
                    <div style={{ flex: 1 }}>
                      <img
                        src={`${BASE}/images/${story.slide}`}
                        alt={`${story.name} — after`}
                        style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'top', borderRadius: '4px', display: 'block' }}
                      />
                      <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', color: '#36302A', marginTop: '6px', textAlign: 'center', textTransform: (story as any).afterCaption ? 'none' : 'uppercase' }}>{(story as any).afterCaption || 'After'}</p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={`${BASE}/images/${story.slide}`}
                    alt={story.name}
                    style={{ width: '100%', borderRadius: '4px', display: 'block' }}
                  />
                )}
              </div>
              <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                <p style={{
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: i % 2 === 0 ? '#C8B59E' : '#574C3F',
                  marginBottom: '12px',
                }}>
                  {story.tag}
                </p>
                <h2 style={{
                  fontFamily: 'Libre Baskerville, serif',
                  fontSize: 'clamp(22px, 2.5vw, 34px)',
                  fontWeight: 400,
                  color: i % 2 === 0 ? '#F6F3EC' : '#36302A',
                  marginBottom: '8px',
                  lineHeight: 1.2,
                }}>
                  {story.name}
                </h2>
                {!(story as any).elenaStyle && (
                <p style={{
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: i % 2 === 0 ? '#C8B59E' : '#574C3F',
                  marginBottom: '28px',
                  letterSpacing: '0.03em',
                }}>
                  {story.summary}
                </p>
                )}
                {story.body.map((para, j) => (
                  <p key={j} style={{
                    fontFamily: 'Figtree, sans-serif',
                    fontSize: '16px',
                    lineHeight: 1.85,
                    color: i % 2 === 0 ? '#F6F3EC' : '#574C3F',
                    opacity: 0.85,
                    marginBottom: '16px',
                  }}>
                    {para}
                  </p>
                ))}
                {story.quote && (
                  <p style={{
                    fontFamily: 'Libre Baskerville, serif',
                    fontSize: '18px',
                    fontStyle: 'italic',
                    color: i % 2 === 0 ? '#F8F3EC' : '#36302A',
                    lineHeight: 1.5,
                    marginTop: '12px',
                  }}>
                    {story.quote}
                  </p>
                )}
                {false && (
                  <p style={{
                    fontFamily: 'Figtree, sans-serif',
                    fontSize: '13px',
                    color: i % 2 === 0 ? '#C8B59E' : '#574C3F',
                    marginTop: '24px',
                    fontStyle: 'italic',
                    borderTop: '1px solid rgba(87,76,63,0.3)',
                    paddingTop: '16px',
                  }}>
                    {story.note}
                  </p>
                )}
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) {
              .story-grid-${i} { grid-template-columns: 1fr !important; }
              .story-grid-${i} > div { order: unset !important; }
            }
          `}</style>
        </section>
      ))}

      {/* GARDEN TOWER STORY */}
      <section style={{ background: '#36302A', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
          }} className="garden-tower-grid">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <img
                  src={`${BASE}/images/partner-usana-photo.jpg`}
                  alt="Mother and son with radishes grown in their USANA Foundation garden tower"
                  style={{ width: '100%', borderRadius: '4px', display: 'block', maxHeight: '340px', objectFit: 'cover', objectPosition: 'center top' }}
                />
                <p style={{
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: '12px',
                  color: '#C8B59E',
                  opacity: 0.9,
                  marginTop: '10px',
                  fontStyle: 'italic',
                  lineHeight: 1.5,
                  textAlign: 'center',
                }}>
                  Mother harvesting radishes from her USANA Foundation garden tower
                </p>
              </div>
              <div>
                <img
                  src={`${BASE}/images/garden-tower-fruiting.webp`}
                  alt="A Q'eqchi' Maya mother and son with their thriving USANA Foundation garden tower"
                  style={{ width: '100%', borderRadius: '4px', display: 'block', maxHeight: '340px', objectFit: 'cover', objectPosition: 'center 20%' }}
                />
                <p style={{
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: '12px',
                  color: '#C8B59E',
                  opacity: 0.9,
                  marginTop: '10px',
                  fontStyle: 'italic',
                  lineHeight: 1.5,
                  textAlign: 'center',
                }}>
                  A mother and her son with their abundant garden tower
                </p>
              </div>
            </div>
            <div>
              <p style={{
                fontFamily: 'Figtree, sans-serif',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#C8B59E',
                marginBottom: '6px',
              }}>
                Impact Story
              </p>
              <p style={{
                fontFamily: 'Figtree, sans-serif',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#C8B59E',
                opacity: 0.7,
                marginBottom: '20px',
              }}>
                Made possible by USANA Foundation
              </p>
              <h2 style={{
                fontFamily: 'Libre Baskerville, serif',
                fontSize: 'clamp(22px, 2.5vw, 34px)',
                fontWeight: 400,
                color: '#F8F3EC',
                marginBottom: '28px',
                lineHeight: 1.2,
                fontStyle: 'italic',
              }}>
                A Garden Tower is Self-Reliance in Action
              </h2>
              {[
                'A Garden Tower is a vertical garden that allows families to grow fresh food right outside their homes — no large plot of land required.',
                'Each tower holds 120 plants and can produce 1,000 meals every year. Over its lifetime, a single tower yields up to 10,000 meals for the family it feeds.',
                'In the highlands of Alta Verapaz, where land is scarce and malnutrition runs deep, that number is everything.',
                'The crops are chosen deliberately. Leafy greens like spinach are rich in iron, vitamin A, and the nutrients children need to grow and recover. And because the seeds can be saved and replanted again and again, each tower becomes a permanent, self-sustaining food source — not a one-time gift.',
                'Families receive hands-on training and ongoing support. Some grow enough to feed their children. Others grow enough to sell extra produce at the market.',
              ].map((para, i) => (
                <p key={i} style={{
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: '16px',
                  lineHeight: 1.85,
                  color: '#F8F3EC',
                  opacity: 0.8,
                  marginBottom: '16px',
                }}>
                  {para}
                </p>
              ))}
              <p style={{
                fontFamily: 'Libre Baskerville, serif',
                fontSize: '20px',
                fontStyle: 'italic',
                color: '#36302A',
                lineHeight: 1.5,
                marginTop: '8px',
              }}>
                
              </p>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) {
              .garden-tower-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* FILM */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#574C3F', marginBottom: '16px', textAlign: 'center' }}>
            Learn More
          </p>
          <h2 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 400, color: '#36302A', marginBottom: '16px', textAlign: 'center' }}>
            Watch the Film
          </h2>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', color: '#574C3F', opacity: 0.75, marginBottom: '48px', lineHeight: 1.7, textAlign: 'center', fontStyle: 'italic' }}>
            These stories are just a glimpse. Come see the rest.
          </p>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
            <iframe
              src="https://www.youtube.com/embed/bh0TpBF26uQ"
              title="The Humble Village Documentary"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#574C3F', padding: '100px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(24px, 3.5vw, 40px)',
            fontWeight: 400,
            color: '#F6F3EC',
            marginBottom: '20px',
            lineHeight: 1.3,
          }}>
            Every story begins with a gift.
          </h2>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '17px', color: '#F6F3EC', opacity: 0.75, marginBottom: '40px', lineHeight: 1.7 }}>
            Over 274 children overcame severe malnutrition in 2025. Your gift writes the next story.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://www.zeffy.com/en-US/donation-form/donate-to-the-humble-village"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#F8F3EC',
                color: '#36302A',
                padding: '16px 40px',
                borderRadius: '6px',
                fontFamily: 'Figtree, sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Give Now
            </a>
            <Link
              to="/naru-circle"
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: '#F6F3EC',
                padding: '15px 36px',
                borderRadius: '6px',
                border: '1.5px solid rgba(246,243,236,0.5)',
                fontFamily: 'Figtree, sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Narú Circle
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
