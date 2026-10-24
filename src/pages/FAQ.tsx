import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
const groups = [
  {
    "title": "Wedding & Event Childcare",
    "questions": [
      {
        "q": "What does wedding childcare actually look like?",
        "a": "Every wedding is different, which is why every Little Wonders experience is tailored to your celebration. Care can take place onsite at your wedding venue or offsite at nearby accommodation, with our Wonder Team, resources, activities and care environment planned around the children attending. Our goal is simple: for the children to have a wonderful experience of their own while their parents and loved ones can be fully present for yours."
      },
      {
        "q": "How many children can you care for at a wedding?",
        "a": "Most commonly, we provide wedding childcare for anywhere from one to 25 children, with our Wonder Team and care experience tailored to the ages, needs and number of children attending. We can also accommodate larger celebrations, with staffing and care arrangements planned individually."
      },
      {
        "q": "Do you offer wedding childcare packages?",
        "a": "Yes. All of our wedding childcare packages are custom designed around your celebration. Your package will consider your venue and location, number and ages of children, care hours, staffing requirements and the type of care you’d like us to provide."
      },
      {
        "q": "Is there a minimum booking time?",
        "a": "Yes. Our wedding childcare has a minimum booking time of four hours. From there, your care hours can be tailored around your wedding timeline and the needs of the children and families attending."
      },
      {
        "q": "Can childcare take place away from our wedding venue?",
        "a": "Absolutely. We can provide offsite wedding childcare at suitable nearby accommodation, including holiday homes, Airbnbs and hotels. This can be a wonderful option for younger children who may benefit from a quieter environment, familiar bedtime routines or a little more space away from the celebration."
      },
      {
        "q": "Will parents receive updates during offsite care?",
        "a": "Yes. For offsite wedding care, we generally provide parents with updates approximately every two hours, including photos where possible and appropriate. This gives parents reassurance without having to continually check in while they’re enjoying the celebration."
      },
      {
        "q": "What activities and resources do you provide?",
        "a": "Our activities aren't one-size-fits-all. We select resources according to the ages, interests and developmental needs of the children attending. Depending on your booking, this may include creative activities, sensory experiences, books, imaginative play, construction, dress-ups, games, baby resources, cosy spaces and age-appropriate technology that doesn't require Wi-Fi. Our resources are carefully maintained and sanitised after use."
      },
      {
        "q": "Can you match the children's space to our wedding?",
        "a": "Yes! Where possible, our wedding care spaces can be thoughtfully coordinated with your wedding colours and overall styling at no additional charge. Our signature teepees, comfort spaces and selected resources can all help the children's area feel like a considered part of your celebration rather than an afterthought."
      },
      {
        "q": "What is Guest Connect?",
        "a": "Guest Connect is one of the ways we help families feel comfortable before the wedding day. In the lead-up to your celebration, we connect directly with the parents or guardians of the children attending. These short conversations allow us to learn about routines, interests, allergies, comfort needs and anything else we should know. It also gives parents an opportunity to ask questions and become familiar with Little Wonders before leaving their children in our care."
      },
      {
        "q": "Do you provide sleep equipment?",
        "a": "Depending on your booking, we can provide sleep and comfort resources including portable cots, linen, inflatable children's mattresses, blankets and other age-appropriate items. We'll discuss sleep requirements during the planning process so we know exactly what your little guests may need."
      },
      {
        "q": "Do you offer overnight wedding care?",
        "a": "Overnight care may be available specifically for the celebrating couple's children. As every overnight booking is different, availability and arrangements are discussed individually."
      },
      {
        "q": "Can you transport children?",
        "a": "Transport may be available for certain wedding bookings, particularly for bridal party children or groups of three or fewer children. Any transport requirements must be discussed and arranged with Little Wonders in advance."
      },
      {
        "q": "Can you provide children's meals?",
        "a": "Children's catering may be available as an additional option for offsite wedding care at suitable accommodation. We can discuss catering requirements, dietary needs and the suitability of this option when planning your booking."
      }
    ]
  },
  {
    "title": "Private, Corporate & Group Care",
    "questions": [
      {
        "q": "Do you still offer private babysitting?",
        "a": "Yes. Alongside our wedding and event services, Little Wonders continues to provide private babysitting and family care, subject to team availability and location."
      },
      {
        "q": "What is a Group Booking?",
        "a": "Group Bookings are designed for families travelling together who would like coordinated childcare at their accommodation. This can work particularly well for destination wedding guests, extended families or groups of friends travelling together who would like their children cared for in one familiar location."
      },
      {
        "q": "Do you provide corporate and private event childcare?",
        "a": "Yes. Our Private & Corporate Care can be tailored for conferences, corporate events, professional functions, private celebrations and other organised events where childcare would make the experience easier for attending families."
      }
    ]
  },
  {
    "title": "Booking With Little Wonders",
    "questions": [
      {
        "q": "How do I get started?",
        "a": "Start by sending us an enquiry with the details you already know. For wedding childcare, we'll generally arrange a complimentary Connection Call directly with Nicole our Director & Care Coordinator, where we can learn more about your wedding, venue, children and what you're hoping your childcare experience will look like. Following your call, we'll recommend suitable options and prepare your personalised quote."
      },
      {
        "q": "What is a Connection Call?",
        "a": "Our Connection Call is a relaxed, complimentary and obligation-free conversation, generally lasting around 15–30 minutes. It gives us an opportunity to understand your plans, talk through different care possibilities and answer your questions before putting together your custom wedding childcare proposal."
      },
      {
        "q": "How far in advance should we book?",
        "a": "We recommend enquiring as early as possible, particularly for weddings, weekends and popular dates. Our availability changes throughout the year and your date isn't secured until the required booking payment has been received."
      },
      {
        "q": "How do you choose our Wonder Team?",
        "a": "Every member of our Wonder Team is personally recruited and selected in-house. When allocating your care team, we consider the ages and needs of the children, type of care being provided, relevant experience and who we believe will be the best fit for your booking."
      },
      {
        "q": "Can we meet our Wonder Team before our booking?",
        "a": "Where suitable and available, trial bookings can be arranged before your wedding or care date. Facetimes and phone calls will also allow to you connect with your personal babysitter if you are not part of a group or function booking. Our wedding planning and Guest Connect process also ensures important information is exchanged ahead of time and gives families greater familiarity with Little Wonders before the celebration."
      },
      {
        "q": "What information do you need about the children?",
        "a": "Before care takes place, we'll gather important information for each child, including parent or guardian contact details, routines, allergies, medical information, interests, comfort needs and other relevant care information. For weddings, much of this is coordinated through our pre-event planning and Guest Connect process."
      },
      {
        "q": "Can you care for children with allergies, medical conditions or additional needs?",
        "a": "We're always happy to discuss individual care requirements. Allergies, medical conditions, additional needs and other support requirements are considered individually so we can determine whether we can safely and appropriately support the child. Relevant medical or care plans may be required before care takes place."
      },
      {
        "q": "What happens if something changes after we book?",
        "a": "We understand that wedding plans and guest lists can evolve. If your number of children, ages, care hours, venue arrangements or other important details change, simply let us know as soon as possible. We'll review your care plan and advise whether any changes to staffing or your booking are required."
      }
    ]
  },
  {
    "title": "Safety & Peace of Mind",
    "questions": [
      {
        "q": "How do you keep children safe during weddings and events?",
        "a": "Safety is considered throughout the entire planning process. Depending on the booking, this can include carefully planned staffing, venue risk assessments, child-safe sign-in and sign-out procedures, collection of medical and allergy information, venue coordination and individual care planning."
      },
      {
        "q": "Are your Wonder Team members screened?",
        "a": "Yes. Our recruitment is completed personally and in house. Our process includes interviews, verification of relevant qualifications and required checks, and extensive reference checking before someone can represent Little Wonders. You can learn more on our Our Wonder Team page."
      },
      {
        "q": "Why does Little Wonders use smaller ratios?",
        "a": "Smaller ratios allow our Wonder Team to provide more individual attention, better support children's routines and needs, and respond more effectively when the unexpected happens. You can read more about how we determine staffing on our Our Approach to Ratios page."
      }
    ]
  },
  {
    "title": "Locations",
    "questions": [
      {
        "q": "Where does Little Wonders provide wedding childcare?",
        "a": "Our wedding and event childcare primarily services Southern Queensland, including popular wedding destinations throughout Maleny and the Sunshine Coast Hinterland, Sunshine Coast and Noosa, Brisbane, Toowoomba and the Darling Downs, Tambourine Mountain and surrounding regions. Our Wonder Team travels to many beautiful locations throughout the region. This includes offsite care at Airbnb's, holiday homes, accommodation and private residences."
      },
      {
        "q": "Do you travel to wedding venues?",
        "a": "Absolutely. Travelling to wedding venues is a big part of what we do. Whether your celebration is at a hinterland estate, country property, hotel, homestead or another beautiful venue, we'll discuss location and travel requirements when preparing your custom proposal."
      }
    ]
  }
];
export default function FAQ() {
 const [open, setOpen] = useState<string | null>('0-0');
 return <main><header className="page-hero"><p className="eyebrow">Little Wonders</p><h1>Frequently Asked Questions</h1><p>A few things you might be wondering...</p></header>
 <div className="content-grid"><aside className="side-nav"><Link to="/about">About Us</Link><Link to="/our-story">Our Story</Link><Link to="/wonder-team">Our Wonder Team</Link><Link to="/values-mission-sustainability">Values, Mission &amp; Sustainability</Link><Link to="/ratios">Our Ratios</Link><Link to="/team-safety">Team Safety</Link><Link to="/faq">FAQ</Link></aside><article className="prose faq-content">
 <p>We know arranging childcare — particularly for a wedding, special event or while travelling — can come with plenty of questions. Below are some of the things families and couples ask us most often. If you can’t find what you’re looking for, please get in touch. We’re always happy to help.</p>
 {groups.map((g,gi)=><section key={g.title} className="faq-group"><h2>{g.title}</h2>{g.questions.map((f,fi)=>{const key=`${gi}-${fi}`; const expanded=open===key; return <div className="faq-item" key={key}><button type="button" aria-expanded={expanded} onClick={()=>setOpen(expanded?null:key)}><span>{f.q}</span><ChevronDown size={19} style={{transform:expanded?'rotate(180deg)':undefined}} /></button>{expanded&&<div className="faq-answer">{f.a}</div>}</div>;})}</section>)}
 <section><h2>Still have a question?</h2><p>Every family and celebration is different, so there will always be questions that don't fit neatly into an FAQ.</p><p><strong>Get in touch with Little Wonders or book a complimentary Connection Call. We'd love to hear what you're planning and help you explore what care could look like for your celebration.</strong></p><Link className="button" to="/contact">Contact Little Wonders</Link></section>
 </article></div></main>;
}
