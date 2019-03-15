import React from "react";
import TestRenderer from "react-test-renderer";
import { editionBreakpointWidths } from "@times-components/styleguide";
import { iterator } from "@times-components/test-utils";
import { setDimension } from "@times-components/test-utils/dimensions";
import {
  mockDailyRegisterSlice,
  mockLeadersSlice,
  mockLeadOneAndOneSlice,
  mockLeadOneFullWidthSlice,
  mockLeadTwoNoPicAndTwoSlice,
  mockSecondaryOneSlice,
  mockSecondaryFourSlice,
  mockLeadOneAndFourSlice,
  mockSecondaryTwoNoPicAndTwoSlice,
  mockSecondaryOneAndColumnistSlice,
  mockSecondaryOneAndFourSlice,
  mockSecondaryTwoAndTwoSlice
} from "@times-components/fixture-generator";
import Responsive from "@times-components/responsive";
import "./mocks";
import {
  DailyRegisterLeadFourSlice,
  LeadOneAndOneSlice,
  LeadOneFullWidthSlice,
  LeadersSlice,
  LeadTwoNoPicAndTwoSlice,
  SecondaryOneAndFourSlice,
  SecondaryOneSlice,
  SecondaryFourSlice,
  LeadOneAndFourSlice,
  SecondaryTwoNoPicAndTwoSlice,
  SecondaryOneAndColumnistSlice,
  SecondaryTwoAndTwoSlice
} from "../src/slices";

const slices = [
  {
    mock: mockDailyRegisterSlice(),
    name: "daily universal register",
    Slice: DailyRegisterLeadFourSlice
  },
  {
    mock: mockLeadOneAndOneSlice(),
    name: "lead one and one",
    Slice: LeadOneAndOneSlice
  },
  {
    mock: mockLeadOneFullWidthSlice(),
    name: "lead one full width",
    Slice: LeadOneFullWidthSlice
  },
  {
    mock: mockLeadTwoNoPicAndTwoSlice(),
    name: "lead two no pic and two",
    Slice: LeadTwoNoPicAndTwoSlice
  },
  {
    mock: mockLeadersSlice(),
    name: "leaders slice",
    Slice: LeadersSlice
  },
  {
    mock: mockSecondaryOneAndFourSlice(),
    name: "secondary one and four",
    Slice: SecondaryOneAndFourSlice
  },
  {
    mock: mockSecondaryOneSlice(),
    name: "secondary one",
    Slice: SecondaryOneSlice
  },
  {
    mock: mockSecondaryFourSlice(),
    name: "secondary four",
    Slice: SecondaryFourSlice
  },
  {
    mock: mockSecondaryOneAndColumnistSlice(),
    name: "secondary one and columnist",
    Slice: SecondaryOneAndColumnistSlice
  },
  {
    mock: mockSecondaryTwoAndTwoSlice(),
    name: "secondary two and two",
    Slice: SecondaryTwoAndTwoSlice
  },
  {
    mock: mockLeadOneAndFourSlice(),
    name: "lead one and four slice",
    Slice: LeadOneAndFourSlice
  },
  {
    mock: mockSecondaryTwoNoPicAndTwoSlice(),
    name: "secondary two no pic and two",
    Slice: SecondaryTwoNoPicAndTwoSlice
  }
];

const tabletTester = type =>
  slices.map(({ mock, name, Slice }) => ({
    name: `${name} - ${type}`,
    test: () => {
      setDimension({ width: editionBreakpointWidths[type] });
      const output = TestRenderer.create(
        <Responsive>
          <Slice onPress={() => {}} slice={mock} />
        </Responsive>
      );

      expect(output).toMatchSnapshot();
    }
  }));

export default () => {
  const tests = [
    ...tabletTester("medium"),
    ...tabletTester("wide"),
    ...tabletTester("huge")
  ];

  iterator(tests);
};
