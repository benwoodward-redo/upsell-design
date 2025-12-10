import { ProductCard } from "./components/ProductCard";
import { SidebarWrapper } from "./components/SidebarWrapper";
import { SimulationChart } from "./components/SimulationChart";
import CountUp from "./components/CountUp";
import Dither from "./components/Dither";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import {
  ExternalLink,
  ArrowUpRight,
  Route,
  Warehouse,
  RefreshCw,
  Brain,
  TrendingDown,
  Clock,
  MapPin,
  Workflow,
  Layers,
  Split,
  Tag,
  Bell,
  FileText,
  DollarSign,
  BarChart,
  User,
  Building,
  AlertTriangle,
  ShoppingCart,
  TrendingUp,
  Scan,
  RotateCw,
  Upload,
  Search,
  Image,
  FolderTree,
  Copy,
  Calculator,
  Send,
  Users,
  GitCompare,
  Mail,
  MessageSquare,
  Sparkles,
  Target,
  MessageCircle,
  Settings,
  Camera,
  Eye,
  Zap,
  ArrowRight,
  Play,
  Check,
  Undo2,
  Loader2,
} from "lucide-react";

export default function App() {
  const [isAEOActivated, setIsAEOActivated] = useState(false);
  const [isAEOActivating, setIsAEOActivating] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(
    new Set(),
  );
  const [completedAnimations, setCompletedAnimations] =
    useState<Set<string>>(new Set());
  const cardRefs = useRef<{
    [key: string]: HTMLDivElement | null;
  }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardName = entry.target.getAttribute(
              "data-product-name",
            );
            if (cardName) {
              setVisibleCards((prev) =>
                new Set(prev).add(cardName),
              );
            }
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the card is visible
        rootMargin: "0px",
      },
    );

    // Observe all card refs
    Object.values(cardRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [isAEOActivated]); // Re-run when AEO activation changes

  const getFeatureIcon = (featureName: string) => {
    const iconMap: { [key: string]: any } = {
      "AI search optimization": Sparkles,
      "Product data structuring": FolderTree,
      "Schema markup generation": FileText,
      "AI-friendly descriptions": MessageCircle,
      "Answer engine presence": Target,
      "Citation tracking": Eye,
      "Automated order routing": Route,
      "Multi-warehouse support": Warehouse,
      "Real-time inventory sync": RefreshCw,
      "Intelligent shipping rules": Brain,
      "Cost optimization": TrendingDown,
      "Delivery time prediction": Clock,
      "Order tracking": MapPin,
      "Custom workflows": Workflow,
      "Bulk operations": Layers,
      "Split shipments": Split,
      "Priority tagging": Tag,
      "Automated notifications": Bell,
      "Automated return labels": Tag,
      "Refund processing": DollarSign,
      "Return analytics": BarChart,
      "Customer portal": User,
      "Multi-location tracking": Building,
      "Low stock alerts": AlertTriangle,
      "Purchase orders": ShoppingCart,
      "Stock forecasting": TrendingUp,
      "Barcode scanning": Scan,
      "Cycle counting": RotateCw,
      "Bulk product import": Upload,
      "SEO optimization": Search,
      "Image management": Image,
      "Category automation": FolderTree,
      "Variant handling": Copy,
      "Price rules": Calculator,
      "Automated campaigns": Send,
      Segmentation: Users,
      "A/B testing": GitCompare,
      "Abandoned cart recovery": ShoppingCart,
      "Welcome series": Mail,
      "SMS broadcasts": MessageSquare,
      "AI product recommendations": Sparkles,
      "Smart search": Search,
      "Chatbot support": MessageCircle,
      "Personalization engine": Settings,
      "Visual search": Camera,
      "Behavioral targeting": Target,
      "Quick setup": Zap,
      "Start now": ArrowRight,
      "Play demo": Play,
      "Complete setup": Check,
      "Undo setup": Undo2,
      Loading: Loader2,
    };
    return iconMap[featureName] || Tag;
  };

  const products = [
    {
      name: "AEO",
      progress: 100,
      buttonText: "One-click activate",
      buttonVariant: "activate" as const,
      hasFreeplan: false,
      merchantResults: [
        {
          value: "61.4%",
          description: "increase in answer engine visibility",
        },
        {
          value: "8.7x",
          description: "more product citations",
        },
        {
          value: "$2,340",
          description: "average revenue increase per week",
        },
      ],
      currentSpending: 180.25,
      estimatedSavings: 52.8,
      avgMetrics: {
        metric1: {
          label: "Avg. Order Value",
          value: "$127.50",
        },
        metric2: {
          label: "Avg. Fulfillment Time",
          value: "2.3 days",
        },
        metric3: { label: "Avg. Success Rate", value: "96.8%" },
      },
      timeEstimate: "Ready to activate",
      features: [
        "AI search optimization",
        "Product data structuring",
        "Schema markup generation",
        "AI-friendly descriptions",
        "Answer engine presence",
        "Citation tracking",
      ],
    },
    {
      name: "Order Management",
      progress: 45,
      buttonText: "Continue setup",
      buttonVariant: "continue" as const,
      hasFreeplan: true,
      merchantResults: [
        {
          value: "42%",
          description: "reduction in processing time",
        },
        {
          value: "65%",
          description: "fewer fulfillment errors",
        },
        {
          value: "2.3hrs",
          description: "saved per day on average",
        },
      ],
      currentSpending: 95.4,
      estimatedSavings: 31.2,
      avgMetrics: {
        metric1: { label: "Avg. Orders/Day", value: "156" },
        metric2: { label: "Avg. Time Saved", value: "38%" },
        metric3: { label: "Avg. Error Rate", value: "1.2%" },
      },
      timeEstimate: "~15 min remaining",
      features: [
        "Order tracking",
        "Custom workflows",
        "Bulk operations",
        "Split shipments",
        "Priority tagging",
        "Automated notifications",
      ],
    },
    {
      name: "Returns",
      progress: 100,
      buttonText: "Active",
      buttonVariant: "active" as const,
      hasFreeplan: true,
      merchantResults: [
        {
          value: "45%",
          description: "lower return processing costs",
        },
        { value: "95%", description: "automation rate" },
        {
          value: "$145",
          description: "average savings per week",
        },
      ],
      currentSpending: 145.5,
      estimatedSavings: 42.3,
      avgMetrics: {
        metric1: { label: "Avg. Return Rate", value: "8.5%" },
        metric2: {
          label: "Avg. Processing Time",
          value: "3.2 days",
        },
        metric3: {
          label: "Avg. Refund Speed",
          value: "1.8 days",
        },
      },
      timeEstimate: "Complete",
      features: [
        "Automated return labels",
        "Refund processing",
        "Return analytics",
        "Customer portal",
      ],
    },
    {
      name: "Inventory Management",
      progress: 30,
      buttonText: "Continue setup",
      buttonVariant: "continue" as const,
      hasFreeplan: true,
      merchantResults: [
        { value: "98%", description: "stock accuracy" },
        { value: "0", description: "stockout incidents" },
        {
          value: "3.1%",
          description: "increase in turnover rate",
        },
      ],
      currentSpending: 125.6,
      estimatedSavings: 38.9,
      avgMetrics: {
        metric1: { label: "Avg. SKU Count", value: "2,450" },
        metric2: {
          label: "Avg. Turnover Rate",
          value: "4.2x/year",
        },
        metric3: { label: "Avg. Stockout Rate", value: "2.1%" },
      },
      timeEstimate: "~20 min remaining",
      features: [
        "Multi-location tracking",
        "Low stock alerts",
        "Purchase orders",
        "Stock forecasting",
        "Barcode scanning",
        "Cycle counting",
      ],
    },
    {
      name: "Catalog",
      progress: 60,
      buttonText: "Continue setup",
      buttonVariant: "continue" as const,
      hasFreeplan: true,
      merchantResults: [
        {
          value: "85%",
          description: "increase in organic traffic",
        },
        {
          value: "2x",
          description: "improvement in search rankings",
        },
        {
          value: "8.7/10",
          description: "average visibility score",
        },
      ],
      currentSpending: 78.3,
      estimatedSavings: 22.5,
      avgMetrics: {
        metric1: {
          label: "Avg. Products Listed",
          value: "3,250",
        },
        metric2: { label: "Avg. SEO Score", value: "7.8/10" },
        metric3: { label: "Avg. Image Quality", value: "92%" },
      },
      timeEstimate: "~10 min remaining",
      features: [
        "Bulk product import",
        "SEO optimization",
        "Image management",
        "Category automation",
        "Variant handling",
        "Price rules",
      ],
    },
    {
      name: "Email & SMS",
      progress: 15,
      buttonText: "Continue setup",
      buttonVariant: "continue" as const,
      hasFreeplan: true,
      merchantResults: [
        {
          value: "$50K",
          description: "recovered from abandoned carts",
        },
        {
          value: "32%",
          description: "average email open rate",
        },
        {
          value: "12.4%",
          description: "conversion rate increase",
        },
      ],
      currentSpending: 89.75,
      estimatedSavings: 28.6,
      avgMetrics: {
        metric1: { label: "Avg. Open Rate", value: "24.5%" },
        metric2: { label: "Avg. Click Rate", value: "3.8%" },
        metric3: {
          label: "Avg. Unsubscribe Rate",
          value: "0.4%",
        },
      },
      timeEstimate: "~25 min remaining",
      features: [
        "Automated campaigns",
        "Segmentation",
        "A/B testing",
        "Abandoned cart recovery",
        "Welcome series",
        "SMS broadcasts",
      ],
    },
    {
      name: "Shopper AI",
      progress: 65,
      buttonText: "Continue setup",
      buttonVariant: "continue" as const,
      hasFreeplan: true,
      merchantResults: [
        {
          value: "32%",
          description: "increase in average order value",
        },
        {
          value: "425",
          description: "AI interactions per day",
        },
        {
          value: "4.6/5",
          description: "customer satisfaction score",
        },
      ],
      currentSpending: 110.5,
      estimatedSavings: 45.2,
      avgMetrics: {
        metric1: {
          label: "Avg. Interactions/Day",
          value: "425",
        },
        metric2: { label: "Avg. Satisfaction", value: "4.6/5" },
        metric3: {
          label: "Avg. Resolution Rate",
          value: "89%",
        },
      },
      timeEstimate: "~30 min to complete",
      features: [
        "AI product recommendations",
        "Smart search",
        "Chatbot support",
        "Personalization engine",
        "Visual search",
        "Behavioral targeting",
      ],
    },
  ];

  return (
    <div className="flex h-screen bg-white relative">
      <div className="absolute inset-0 z-0">
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.01}
          opacity={0.22}
        />
      </div>
      <div className="relative z-10 flex w-full h-full pointer-events-none">
        <div className="pointer-events-auto h-full">
          <SidebarWrapper />
        </div>

        <main className="flex-1 px-64 bg-transparent overflow-hidden pt-[0px] pr-[256px] pl-[256px] pointer-events-auto flex flex-col">
          <div className="max-w-4xl mx-auto w-full h-full flex flex-col">
            <div className="z-50 pb-[18px] pt-[30px] pr-[0px] pl-[0px] bg-transparent flex-shrink-0">
              <h1 className="text-[#111827] mb-2 text-[36px]">
                Welcome back, Acme Inc.
              </h1>
              <p className="text-[#6b7280] mb-4">
                Track your onboarding progress across all
                products
              </p>

              <div className="space-y-3">
                <div className="bg-white border border-[#e5e7eb] rounded-lg px-[24px] py-[12px] m-[0px]">
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center gap-2">
                        <h3 className="text-[#111827]">
                          Returns
                        </h3>
                        <div className="w-3 h-3 rounded-full bg-[#10b981] border-2 border-[#6ee7b7] animate-pulse"></div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-[11px]">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-[#10b981]" />
                        <span className="text-[#111827]">
                          $3,400 revenue uplift
                        </span>
                      </div>
                      <span className="text-[#6b7280]">
                        Dec 4 - Dec 10
                      </span>
                    </div>

                    <div className="flex-1"></div>

                    <button className="flex items-center gap-2 text-[#6b7280] text-[14px] group hover:text-black transition-colors cursor-pointer">
                      <span>Go to returns dashboard</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                    </button>
                  </div>
                </div>

                {isAEOActivated && (
                  <div className="bg-white border border-[#e5e7eb] rounded-lg px-[24px] py-[12px] mt-[8px] mr-[0px] mb-[0px] ml-[0px]">
                    <div className="flex items-center gap-6">
                      <div className="flex-shrink-0">
                        <div className="flex items-center gap-2">
                          <h3 className="text-[#111827]">
                            AEO
                          </h3>
                          <div className="w-3 h-3 rounded-full bg-[#10b981] border-2 border-[#6ee7b7] animate-pulse"></div>
                          <button
                            onClick={() =>
                              setIsAEOActivated(false)
                            }
                            className="text-[#6b7280] hover:text-[#374151] transition-colors p-1"
                            title="Undo activation"
                          >
                            <Undo2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="flex-1"></div>

                      <button className="flex items-center gap-2 text-[#6b7280] text-[14px] group hover:text-black transition-colors cursor-pointer">
                        <span>Go to AEO dashboard</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto min-h-0 pb-8 snap-y snap-mandatory">
              <div className="space-y-4 p-[0px]">
                {products
                  .filter(
                    (product) =>
                      product.name !== "Returns" &&
                      !(
                        product.name === "AEO" && isAEOActivated
                      ),
                  )
                  .map((product, index) => (
                    <div
                      key={product.name}
                      className="bg-white border border-[#e5e7eb] rounded-lg p-6 mb-4 snap-start"
                      ref={(ref) =>
                        (cardRefs.current[product.name] = ref)
                      }
                      data-product-name={product.name}
                    >
                      <div className="flex items-center gap-6 mb-6">
                        <div className="flex-shrink-0 self-center">
                          <h3 className="text-[#111827]">
                            {product.name}
                          </h3>
                          {product.hasFreeplan && (
                            <p className="text-[#6b7280] text-[12px]">
                              Free plan available
                            </p>
                          )}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between text-[12px] mb-2">
                            <span className="text-[#6b7280]">
                              Setup progress
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="text-[#6b7280]">
                                {product.timeEstimate}
                              </span>
                              <span className="text-[#374151] flex items-center justify-end w-[32px] tabular-nums">
                                <CountUp
                                  from={0}
                                  to={product.progress}
                                  separator=","
                                  direction="up"
                                  duration={1.5}
                                  stiffness={30}
                                  damping={12}
                                  startWhen={visibleCards.has(
                                    product.name,
                                  )}
                                />
                                %
                              </span>
                            </div>
                          </div>
                          <div className="w-full bg-[#e5e7eb] rounded-full h-2">
                            <motion.div
                              className="bg-[#4b5563] h-2 rounded-full"
                              initial={{ width: "0%" }}
                              animate={{
                                width: visibleCards.has(
                                  product.name,
                                )
                                  ? `${product.progress}%`
                                  : "0%",
                              }}
                              transition={{
                                type: "spring",
                                stiffness: 30,
                                damping: 12,
                              }}
                            />
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            if (
                              product.name === "AEO" &&
                              product.buttonVariant ===
                                "activate"
                            ) {
                              setIsAEOActivating(true);
                              setTimeout(() => {
                                setIsAEOActivated(true);
                                setIsAEOActivating(false);
                              }, 800);
                            }
                          }}
                          disabled={
                            product.name === "AEO" &&
                            isAEOActivating
                          }
                          className={`flex-shrink-0 px-4 py-2 rounded-md text-[12px] transition-colors whitespace-nowrap flex items-center gap-2 ${
                            product.buttonVariant === "active"
                              ? "bg-[#d1fae5] text-[#065f46] hover:bg-[#a7f3d0]"
                              : product.buttonVariant ===
                                  "activate"
                                ? "bg-[#111827] text-white hover:bg-[#1f2937]"
                                : "bg-[#f3f4f6] text-[#374151] hover:bg-[#e5e7eb]"
                          }`}
                        >
                          {product.buttonText}
                          {product.name === "AEO" &&
                          isAEOActivating ? (
                            <Loader2 className="w-3 h-3 animate-spin" />
                          ) : (
                            <>
                              {product.buttonVariant ===
                                "activate" && (
                                <Zap className="w-3 h-3" />
                              )}
                              {product.buttonVariant ===
                                "active" && (
                                <Check className="w-3 h-3" />
                              )}
                              {product.buttonVariant ===
                                "continue" &&
                                product.buttonText ===
                                  "Start setup" && (
                                  <Play className="w-3 h-3" />
                                )}
                              {product.buttonVariant ===
                                "continue" &&
                                product.buttonText !==
                                  "Start setup" && (
                                  <ArrowRight className="w-3 h-3" />
                                )}
                            </>
                          )}
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col h-full">
                          <div className="mb-4 pb-4 flex-1">
                            <p className="text-[#6b7280] text-[12px] mb-2">
                              Features
                            </p>
                            <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                              {product.features.map(
                                (feature, index) => {
                                  const IconComponent =
                                    getFeatureIcon(feature);
                                  return (
                                    <li
                                      key={index}
                                      className="text-[#111827] text-[12px] flex items-center gap-2"
                                    >
                                      <IconComponent className="w-3 h-3 text-[#111827] flex-shrink-0" />
                                      <span>{feature}</span>
                                    </li>
                                  );
                                },
                              )}
                            </ul>
                          </div>

                          <div>
                            <p className="text-[#6b7280] text-[11px] mb-1">
                              Dec. 8 - Dec. 14
                            </p>
                            <p className="text-[#111827] text-[14px] mb-3">
                              This week, merchants saw:
                            </p>
                            <div className="grid grid-cols-3 gap-3">
                              {product.merchantResults.map(
                                (result, index) => (
                                  <div
                                    key={index}
                                    className="bg-[#f9fafb] border border-[#e5e7eb] rounded-lg p-3 flex flex-col transition-opacity duration-[1200ms] ease-out"
                                    style={{
                                      opacity: visibleCards.has(
                                        product.name,
                                      )
                                        ? 1
                                        : 0,
                                      transitionDelay: `${200 + index * 200}ms`,
                                    }}
                                  >
                                    <span className="text-[#111827] text-[26px] mb-1">
                                      {result.value}
                                    </span>
                                    <span className="text-[#6b7280] text-[11px]">
                                      {result.description}
                                    </span>
                                  </div>
                                ),
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col h-full">
                          <SimulationChart
                            title={product.name}
                            currentSpending={
                              product.currentSpending
                            }
                            estimatedSavings={
                              product.estimatedSavings
                            }
                            isVisible={visibleCards.has(
                              product.name,
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="mt-8 bg-[#f9fafb] border border-[#e5e7eb] rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#6b7280] rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#111827] mb-1">
                      Need help getting started?
                    </h3>
                    <p className="text-[#6b7280] text-[14px] mb-3">
                      Our team is here to help you complete your
                      onboarding and get the most out of your
                      products.
                    </p>
                    <button className="text-[#374151] text-[14px] hover:text-[#1f2937]">
                      Contact support &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}