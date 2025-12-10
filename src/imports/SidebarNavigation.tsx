import svgPaths from "./svg-k58l7nb37e";
import imgAvatar from "figma:asset/a9a9d476537df2098ee8c0197215ceeb40ffe4e1.png";
import imgAvatar1 from "figma:asset/572a6183892ca2df6e032e2c3c86f59b0f2caa70.png";

function AvatarOnlineIndicator() {
  return (
    <div className="absolute bg-[#d92d20] bottom-0 right-0 rounded-[9999px] size-[8px]" data-name="_Avatar online indicator">
      <div aria-hidden="true" className="absolute border-2 border-[#292929] border-solid inset-[-2px] pointer-events-none rounded-[10001px]" />
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar} />
      <AvatarOnlineIndicator />
    </div>
  );
}

function Home() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="home-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="home-02">
          <path clipRule="evenodd" d={svgPaths.p25ad0b80} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function PillarNavButton() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex gap-[8px] items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="_Pillar nav button">
      <Home />
    </div>
  );
}

function ShoppingCart() {
  return (
    <div className="absolute left-[6px] size-[20px] top-[6px]" data-name="shopping-cart-03">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_9008)" id="shopping-cart-03">
          <path clipRule="evenodd" d={svgPaths.p3cc11400} fill="var(--fill-0, #D6D6D6)" fillRule="evenodd" id="Icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_9008">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PillarNavButton1() {
  return (
    <div className="overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="_Pillar nav button">
      <ShoppingCart />
    </div>
  );
}

function FaceContent() {
  return (
    <div className="absolute left-[6px] size-[20px] top-[6px]" data-name="face-content">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_9014)" id="face-content">
          <path d={svgPaths.p3c5c4180} fill="var(--fill-0, #D6D6D6)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_9014">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PillarNavButton2() {
  return (
    <div className="overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="_Pillar nav button">
      <FaceContent />
    </div>
  );
}

function Announcement() {
  return (
    <div className="absolute left-[6px] size-[20px] top-[6px]" data-name="announcement-03">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="announcement-03">
          <path clipRule="evenodd" d={svgPaths.p2569ad00} fill="var(--fill-0, #D6D6D6)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function PillarNavButton3() {
  return (
    <div className="overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="_Pillar nav button">
      <Announcement />
    </div>
  );
}

function Package() {
  return (
    <div className="absolute left-[6px] size-[20px] top-[6px]" data-name="package">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="package">
          <path clipRule="evenodd" d={svgPaths.p19fdad80} fill="var(--fill-0, #D6D6D6)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function PillarNavButton4() {
  return (
    <div className="overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="_Pillar nav button">
      <Package />
    </div>
  );
}

function MessageTextSquare() {
  return (
    <div className="absolute left-[6px] size-[20px] top-[6px]" data-name="message-text-square-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="message-text-square-02">
          <path clipRule="evenodd" d={svgPaths.p7a1d000} fill="var(--fill-0, #D6D6D6)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function PillarNavButton5() {
  return (
    <div className="overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="_Pillar nav button">
      <MessageTextSquare />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <PillarNavButton />
      <PillarNavButton1 />
      <PillarNavButton2 />
      <PillarNavButton3 />
      <PillarNavButton4 />
      <PillarNavButton5 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
      <Avatar />
      <Frame1 />
    </div>
  );
}

function LayoutLeft() {
  return (
    <div className="absolute left-[6px] size-[20px] top-[6px]" data-name="layout-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="layout-left">
          <path clipRule="evenodd" d={svgPaths.pac98000} fill="var(--fill-0, #D6D6D6)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function PillarNavButton6() {
  return (
    <div className="overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="_Pillar nav button">
      <LayoutLeft />
    </div>
  );
}

function HelpCircle() {
  return (
    <div className="absolute left-[6px] size-[20px] top-[6px]" data-name="help-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_8968)" id="help-circle">
          <path clipRule="evenodd" d={svgPaths.p31745e00} fill="var(--fill-0, #D6D6D6)" fillRule="evenodd" id="Icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_8968">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PillarNavButton7() {
  return (
    <div className="overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="_Pillar nav button">
      <HelpCircle />
    </div>
  );
}

function Settings() {
  return (
    <div className="absolute left-[6px] size-[20px] top-[6px]" data-name="settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_8977)" id="settings">
          <path d={svgPaths.p3a904b80} fill="var(--fill-0, #D6D6D6)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_8977">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PillarNavButton8() {
  return (
    <div className="overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="_Pillar nav button">
      <Settings />
    </div>
  );
}

function AvatarOnlineIndicator1() {
  return (
    <div className="absolute bg-[#079455] bottom-0 right-0 rounded-[9999px] size-[8px]" data-name="_Avatar online indicator">
      <div aria-hidden="true" className="absolute border-2 border-[#292929] border-solid inset-[-2px] pointer-events-none rounded-[10001px]" />
    </div>
  );
}

function Avatar1() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
        <div className="absolute bg-[#d7e3e8] inset-0 rounded-[9999px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[9999px] size-full" src={imgAvatar1} />
      </div>
      <AvatarOnlineIndicator1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0">
      <PillarNavButton6 />
      <PillarNavButton7 />
      <PillarNavButton8 />
      <Avatar1 />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Content">
      <Frame />
      <Frame2 />
    </div>
  );
}

function PillarNavigation() {
  return (
    <div className="bg-[#292929] content-stretch flex flex-col h-full items-center justify-center px-[16px] py-[24px] relative shrink-0 z-[2]" data-name="_Pillar navigation">
      <Content />
    </div>
  );
}

function MacroLabel() {
  return (
    <div className="relative shrink-0 w-full" data-name="Macro label">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Inter:Regular,Book',sans-serif] items-start justify-center leading-[0] not-italic pb-[16px] pt-0 px-[8px] relative text-nowrap w-full">
          <div className="flex flex-col justify-center relative shrink-0 text-[10px] text-neutral-500">
            <p className="leading-[12px] text-nowrap whitespace-pre">Acme Inc.</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[14px] text-neutral-400">
            <p className="leading-[20px] text-nowrap whitespace-pre">Home</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Nav icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Nav icon">
          <path clipRule="evenodd" d={svgPaths.p11afe000} fill="var(--fill-0, #D6D6D6)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <NavIcon />
      <div className="flex flex-col font-['Inter:Regular,Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">Overview</p>
      </div>
    </div>
  );
}

function NavItemBase() {
  return (
    <div className="bg-[#0f0f0f] h-[28px] relative rounded-[4px] shrink-0 w-full" data-name="Nav item base">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] h-[28px] items-center px-[8px] py-[4px] relative w-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function NavItemDropdownBase() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-[16px] relative shrink-0 w-full" data-name="Nav item dropdown base">
      <MacroLabel />
      <NavItemBase />
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] py-[0px] relative size-full pt-[0px] pr-[48px] pb-[0px] pl-[16px]">
          <NavItemDropdownBase />
        </div>
      </div>
    </div>
  );
}

function SidebarNavigation() {
  return (
    <div className="basis-0 bg-[#0f0f0f] grow h-full min-h-px min-w-px relative shrink-0 z-[1]" data-name="Sidebar navigation">
      <div className="content-stretch flex flex-col h-full items-start overflow-clip px-0 py-[8px] relative rounded-[inherit] w-full">
        <Content2 />
      </div>
      <div aria-hidden="true" className="absolute border-[#292929] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function SidebarNavigation1() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex isolate items-center relative size-full" data-name="Sidebar navigation">
      <PillarNavigation />
      <SidebarNavigation />
    </div>
  );
}