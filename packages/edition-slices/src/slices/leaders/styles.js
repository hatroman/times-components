import { colours, fonts, spacing } from "@times-components/styleguide";

const styles = {
  container: {
    backgroundColor: colours.functional.border,
    paddingTop: spacing(4)
  },
  heading: {
    color: colours.section.comment,
    fontFamily: fonts.bodyRegular,
    fontSize: 16,
    lineHeight: 18
  },
  headingContainer: {
    paddingBottom: spacing(1),
    paddingTop: spacing(2)
  },
  mastheadContainer: {
    alignItems: "center"
  },
  mastheadStyleST: {
    height: 54,
    width: 283
  },
  mastheadStyleTimes: {
    height: 51,
    width: 283
  },
  text: {
    textAlign: "center"
  }
};

export default styles;
