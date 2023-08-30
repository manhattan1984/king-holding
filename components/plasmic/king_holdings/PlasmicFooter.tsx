// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kiFSA3h9FrvkjaGy1WgbD5
// Component: mZumc7SQg1Ug

"use client";

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: Z0X_Dp4hOXh6/component

import { useScreenVariants as useScreenVariantshLjci5HdanOh } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: hLJCI5HdanOH/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_king_holdings.module.css"; // plasmic-import: kiFSA3h9FrvkjaGy1WgbD5/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: mZumc7SQg1Ug/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: 5I_AReW0eGkq/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: H3CvpHYIGuJV/icon
import Icon6Icon from "./icons/PlasmicIcon__Icon6"; // plasmic-import: gcXp6hiTw7ts/icon

createPlasmicElementProxy;

export type PlasmicFooter__VariantMembers = {};
export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: p.Flex<"div">;
  columns?: p.Flex<"div">;
};

export interface DefaultFooterProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantshLjci5HdanOh()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        hasGap={true}
        className={classNames(projectcss.all, sty.columns)}
      >
        <div className={classNames(projectcss.all, sty.column__svySr)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___70Mez)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ni5Xd
              )}
            >
              {"Platform"}
            </div>
            <Button
              className={classNames("__wab_instance", sty.button__uhNIr)}
              color={"clear" as const}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__vRinu)}
                  role={"img"}
                />
              }
              size={"minimal" as const}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__csJw2)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mniqD
                )}
              >
                {"MultiHODL"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__rEeXi)}
              color={"clear" as const}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__zfIfc)}
                  role={"img"}
                />
              }
              size={"minimal" as const}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__sHnjc)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xINau
                )}
              >
                {"Crypto Loans"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button___96Vj6)}
              color={"clear" as const}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg___2Bl2B)}
                  role={"img"}
                />
              }
              size={"minimal" as const}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__ejyKq)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rj4WC
                )}
              >
                {"Exchange"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__w6Cas)}
              color={"clear" as const}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__vnBbv)}
                  role={"img"}
                />
              }
              size={"minimal" as const}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__wMqFs)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__lnH3V
                )}
              >
                {"Loyalty Program"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__mqftu)}
              color={"clear" as const}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__pMoGe)}
                  role={"img"}
                />
              }
              size={"minimal" as const}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__kyopu)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__t3JOl
                )}
              >
                {"Web3 Wallet"}
              </div>
            </Button>
          </p.Stack>
        </div>
        <div className={classNames(projectcss.all, sty.column__bz3Oh)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__tbZte)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___0Fb7W
              )}
            >
              {"Company"}
            </div>
            <Button
              className={classNames("__wab_instance", sty.button__tXWlt)}
              color={"clear" as const}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__xP8S)}
                  role={"img"}
                />
              }
              size={"minimal" as const}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__c1Ay2)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__gWtv2
                )}
              >
                {"About Us"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__qqgA2)}
              color={"clear" as const}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__rilI)}
                  role={"img"}
                />
              }
              size={"minimal" as const}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__bj7RV)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ksIOd
                )}
              >
                {"ChoronHoldings Stats"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__ofU5B)}
              color={"clear" as const}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__nbUzX)}
                  role={"img"}
                />
              }
              size={"minimal" as const}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__cvIyg)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___861J
                )}
              >
                {"Careers"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__wbqem)}
              color={"clear" as const}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__oGfrs)}
                  role={"img"}
                />
              }
              size={"minimal" as const}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__b8Uef)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__lsSwq
                )}
              >
                {"Media"}
              </div>
            </Button>
          </p.Stack>
        </div>
        <div className={classNames(projectcss.all, sty.column___5X8Tu)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__buBXw)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__nhZnn
              )}
            >
              {"Website documents"}
            </div>
            <Button
              className={classNames("__wab_instance", sty.button__yNkP)}
              color={"clear" as const}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__w2RCz)}
                  role={"img"}
                />
              }
              size={"minimal" as const}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__sHO)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__lzaTj
                )}
              >
                {"Privacy Notice"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__io0Dk)}
              color={"clear" as const}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__mY36A)}
                  role={"img"}
                />
              }
              size={"minimal" as const}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__om0Xo)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__chFBm
                )}
              >
                {"Cookie Declaration"}
              </div>
            </Button>
          </p.Stack>
        </div>
        <div className={classNames(projectcss.all, sty.column__cAzG4)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__ctZe0)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__nKgYp
              )}
            >
              {"follow us"}
            </div>
            <Icon6Icon
              className={classNames(projectcss.all, sty.svg__fTjOr)}
              role={"img"}
            />
          </p.Stack>
        </div>
      </p.Stack>
      {true ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___42OaU)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__d71KR
            )}
          >
            {
              "Products, services, information and/or materials contained herein may not be legally available for residents of certain jurisdictions such as USA, Canada, China, Hong Kong, countries under embargoes or sanctions and/or other blacklisted countries. If such restrictions apply to you, you are prohibited from accessing the website and/or consume any services provided on this platform. You are requested to leave this website."
            }
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__wu7Up
            )}
          >
            {"Copyright ChoronHoldings, 2023."}
          </div>
        </p.Stack>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "columns"],
  columns: ["columns"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  columns: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooter__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicFooter__ArgProps,
          internalVariantPropNames: PlasmicFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
