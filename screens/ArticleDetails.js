import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Swiper from '../components/Swiper';
import Animated,{FadeInDown} from 'react-native-reanimated';

const ArticleDetails = () => {
  return (
    <Animated.ScrollView 
    entering={FadeInDown.duration(4000).delay(200).springify()}
    style={styles.container}>
      <View style={{alignItems:'center', justifyContent:'center'}}>
      <Text style={{
        fontSize: 30,
        fontWeight: "bold",
        color: "#00796b",
        textAlign: "center",
        marginBottom: 20,
        letterSpacing: 1.5,
        textTransform: "uppercase",
        textShadowColor: "#b2dfdb",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
        top:30
      }}>Our Blogs</Text>
      </View>
      <Swiper />
      <View style={{alignItems:'center', justifyContent:'center'}}>
      <Text style={styles.mainheading}>Innovative directions in immunotherapy research</Text>
      </View>
      <Text style={styles.heading}>Common types of immunotherapies include:</Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>• Immune checkpoint therapy</Text>
        <Text style={styles.listItem}>• Chimeric Antigen Receptor (CAR) T cell therapy</Text>
        <Text style={styles.listItem}>• Monoclonal antibodies</Text>
      </View>

      <Text style={styles.heading}>Researchers are exploring many innovative applications of immunotherapy, including:</Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>• Preventing cancer</Text>
        <Text style={styles.listItem}>• Treating rare cancer types</Text>
        <Text style={styles.listItem}>• Making existing cancer treatments more effective</Text>
      </View>

      <Text style={styles.paragraph}>
        We spoke with three <Text style={styles.bold}>MD Anderson researchers</Text> who will present their <Text style={styles.bold}>groundbreaking immunotherapy research</Text> at the <Text style={styles.bold}>2024 European Society for Medical Oncology (ESMO) Congress</Text>.
      </Text>

      <Text style={styles.subHeading}>Immunotherapy for Prevention</Text>
      <Text style={styles.paragraph}>
        Most lung cancers are detected at later stages when they’re harder to treat. One way that researchers are tackling this problem is interception. “Interception means moving the intervention as early as possible, potentially even catching the disease before it becomes cancer,” says <Text style={styles.bold}>Jianjun Jay Zhang, M.D., Ph.D.</Text>, professor of Thoracic/Head and Neck Medical Oncology.
      </Text>
      <Text style={styles.paragraph}>
        People who smoke or who have smoked may be eligible for lung cancer screening. When screening or a CT scan detects nodules in the lung that may be precancerous, there’s the question of next steps. Although the current recommendation is often just to wait and watch, there’s a strong argument for trying to treat these nodules before they become cancer.
      </Text>
      <Text style={styles.paragraph}>
        “Looking at the underlying biology, the nodules’ molecular profiles are much simpler,” says Zhang. “They don’t have as many mutations as cancer cells, which may make them easier to treat. Patients’ immune systems tend to be more active as well.”
      </Text>
      <Text style={styles.paragraph}>
        Zhang and others are taking advantage of these characteristics for something called <Text style={styles.bold}>immunoprevention</Text>. This means using immunotherapy to target invasive lung cancer precursors and prevent them from developing into cancer.
      </Text>
      <Text style={styles.paragraph}>
        Some of the immunotherapies they’re looking at target adaptive immunity, while others target innate immunity. Innate immunity, which involves types of white blood cells like macrophages and neutrophils, is like a rapid response team that moves in as soon as the immune system is activated. Adaptive immunity, which involves white blood cells like T cells, is composed of specialized cells that need some training to learn what to target. Our immune systems coordinate the two types of response.
      </Text>
      <Text style={styles.paragraph}>
        In one clinical trial, patients with pre-cancer lung nodules took pembrolizumab, a common immunotherapy drug. Pembrolizumab is a PD-L1 inhibitor, meaning it makes it easier for T cells to target the pre-cancer cells. “This trial had promising results for some patients,” notes Zhang, “But for many patients, it’s too early for adaptive immunity.” For pre-cancers, targeting the transition from innate to adaptive immunity may work better.
      </Text>
      <Text style={styles.paragraph}>
        A second clinical trial, which is still ongoing, is looking at a drug called <Text style={styles.bold}>canakinumab</Text>. Canakinumab is an interleukin-1 beta (IL-1β) inhibitor. “It works to balance the innate immunity so that the adaptive immunity, like T cells, will become more activated,” says Zhang. “This rebalances the innate and adaptive immunity so that we can have a better coordination between these two responses.”
      </Text>
      <Text style={styles.paragraph}>
        Zhang is also looking at other targets that could serve as checkpoints for both innate and adaptive immunity. “Our end goal is to leverage the treatable characteristics of the pre-cancer to prevent it from becoming an invasive cancer,” Zhang says.
      </Text>

      <Text style={styles.subHeading}>Immunotherapy to Treat Rare Cancers</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Clear cell sarcomas</Text> are a very rare subtype of soft tissue sarcoma. “Even for sarcoma medical oncologists, this is a rare disease,” says <Text style={styles.bold}>Elise Nassif Haddad, M.D., Ph.D.</Text>, assistant professor of Sarcoma Medical Oncology.
      </Text>
      <Text style={styles.paragraph}>
        There is currently no standard of care for clear cell sarcomas. “These tumors don't respond to chemotherapy, standard immunotherapy, or any targeted therapies. They really have no good treatment right now,” notes Nassif Haddad. Part of what makes them hard to treat is that they’re usually immune-low tumors, meaning there are no immune cells in the tumor microenvironment.
      </Text>
      <Text style={styles.paragraph}>
        For treatment ideas, researchers turned to another rare cancer type, <Text style={styles.bold}>uveal melanomas</Text>. “Uveal melanomas, unlike other melanomas, don't respond to typical immunotherapies,” says Nassif Haddad. In 2022, the FDA approved <Text style={styles.bold}>tebentafusp</Text>, a new immunotherapy drug, to treat uveal melanoma, following studies showing that it prolonged patients’ lives.
      </Text>
      <Text style={styles.paragraph}>
        Tebentafusp is a bispecific T cell engager that targets Gp100, a peptide found in high quantities in uveal melanoma cells. It’s called bispecific because it has two targets: T cells and the Gp100 peptide. It works by attaching to a T cell and then bringing that T cell with it while it searches for Gp100. As a result, it brings more T cells into the tumor microenvironment, where they can recognize and target the cancer cells.
      </Text>
      <Text style={styles.paragraph}>
        Gp100 is also sometimes used as a biomarker to help diagnose clear cell sarcomas. Nassif Haddad’s team thought, “Well, if it works for one very rare type of cancer that doesn’t respond to standard immunotherapy, uveal melanomas, then maybe it could be a target for another — clear cell sarcomas.”
      </Text>
      <Text style={styles.paragraph}>
        The team looked at tissue samples from clear cell sarcoma patients and found that 72% of them tested positive for expression of Gp100. Although these are early results, they are promising for the therapeutic potential of tebentafusp for clear cell sarcomas. “It can be difficult to push research forward for rare disease types. We’re very excited that there’s real potential for developing a new treatment for this disease,” says Nassif Haddad.
      </Text>

      <Text style={styles.subHeading}>Making Immunotherapies More Effective for More Patients</Text>
      <Text style={styles.paragraph}>
        While immunotherapy works effectively for about 60% of patients with cancer, the other 40% do not benefit from it. “So, there’s a great interest in figuring out new ways that we can help reprogram patients’ immune systems to target cancer,” says <Text style={styles.bold}>Adam Grippin, M.D., Ph.D.</Text>, resident in Radiation Oncology.
      </Text>
      <Text style={styles.paragraph}>
        One area of interest is <Text style={styles.bold}>personalized mRNA vaccines</Text>. To create an mRNA vaccine, researchers take mRNA, or messenger RNA, and attach it to a nanoparticle. When someone receives the vaccine, the immune system detects the particles, and, thinking they’re virus-like particles, activates immune cells throughout the whole body, including in the tumor.
      </Text>
      <Text style={styles.paragraph}>
        “Overall, a personalized mRNA vaccine is likely going to be the most effective for patients, but we are decades away from personalized vaccines being widely available,” Grippin says. Fortunately, Grippin’s previous data suggested that many of the benefits of this therapy may not be due to the personalization of the vaccine. “We think a lot of it is actually because the mRNA itself is a really potent activator of the immune system,” explains Grippin.
      </Text>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f8f8f8',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginTop:20
  },
  mainheading:{
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    marginTop:20,
   
  },
  subHeading: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 8,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 20,
  },
  list: {
    marginVertical: 10,
  },
  listItem: {
    fontSize: 16,
    lineHeight: 20,
    marginLeft: 10,
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default ArticleDetails;