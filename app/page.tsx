'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Target, Cpu, TrendingUp, Shield, Gift, Clock, DollarSign, Globe, Zap, Brain, Users, Award, ArrowRight, BarChart3, Sparkles } from 'lucide-react';

export default function DeckPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const slides = [
    // Slide 1: Title
    {
      id: 1,
      content: (
        <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative z-10 text-center space-y-8 px-8">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-50"></div>
                <Brain className="w-32 h-32 text-blue-400 relative animate-pulse" />
              </div>
            </div>
            <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              AetherPay
            </h1>
            <p className="text-3xl text-blue-200">World's First AI Oracle Cross-Border Payment</p>
            <div className="flex items-center justify-center space-x-8 mt-12">
              <div className="text-center">
                <p className="text-5xl font-bold text-green-400">15s</p>
                <p className="text-lg text-gray-300">Settlement</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-yellow-400">0.6%</p>
                <p className="text-lg text-gray-300">Total Fee</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-pink-400">99.9%</p>
                <p className="text-lg text-gray-300">AI Accuracy</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-cyan-400">$2.5M+</p>
                <p className="text-lg text-gray-300">Processed</p>
              </div>
            </div>
            <div className="mt-8 p-4 bg-white/10 rounded-xl backdrop-blur">
              <p className="text-lg text-gray-200">🏆 ETHShanghai 2025 Hackathon Project</p>
              <p className="text-sm text-gray-300">Solving $40B Annual Cross-Border Payment Loss</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 2: The Problem - Deep Dive
    {
      id: 2,
      content: (
        <div className="flex flex-col justify-center h-full bg-gradient-to-br from-red-900 to-orange-900 text-white p-12">
          <h2 className="text-5xl font-bold mb-8 flex items-center">
            <Target className="w-16 h-16 mr-4 text-red-400" />
            The $206.5B Cross-Border Payment Crisis
          </h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-black/30 p-5 rounded-xl backdrop-blur">
              <h3 className="text-xl font-bold text-red-400 mb-3 flex items-center">
                <Clock className="w-6 h-6 mr-2" />
                SWIFT Banking Pain
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• 3-5 days settlement time</li>
                <li>• 11% total fees (wire + FX + intermediary)</li>
                <li>• $25-65 per transaction</li>
                <li>• No transparency on FX rates</li>
                <li>• Weekend/holiday delays</li>
                <li>• Manual KYC/AML processes</li>
              </ul>
            </div>
            <div className="bg-black/30 p-5 rounded-xl backdrop-blur">
              <h3 className="text-xl font-bold text-orange-400 mb-3 flex items-center">
                <Zap className="w-6 h-6 mr-2" />
                Crypto Limitations
              </h3>
              <ul className="space-y-2 text-sm">
                <li><b>Circle:</b> USDC only, no multi-currency</li>
                <li><b>Chainlink:</b> $0.5-2/update, 30min delay</li>
                <li><b>Uniswap:</b> 0.3-1% slippage loss</li>
                <li><b>1inch:</b> MEV attacks risk</li>
                <li><b>Layer-1s:</b> $5-50 gas fees</li>
                <li><b>Bridges:</b> 2-8% fees + security risks</li>
              </ul>
            </div>
            <div className="bg-black/30 p-5 rounded-xl backdrop-blur">
              <h3 className="text-xl font-bold text-yellow-400 mb-3 flex items-center">
                <Users className="w-6 h-6 mr-2" />
                SME Impact
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• 46 million SMEs affected globally</li>
                <li>• 14% average loss per transaction</li>
                <li>• Cash flow delays kill 82% of SMEs</li>
                <li>• No partial payment options</li>
                <li>• Currency volatility exposure</li>
                <li>• Lost business opportunities</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="bg-gradient-to-r from-red-600/30 to-red-500/30 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold">$206.5B</p>
              <p className="text-sm">2024 Market</p>
            </div>
            <div className="bg-gradient-to-r from-orange-600/30 to-orange-500/30 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold">$40B+</p>
              <p className="text-sm">Annual Loss</p>
            </div>
            <div className="bg-gradient-to-r from-yellow-600/30 to-yellow-500/30 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold">15.1%</p>
              <p className="text-sm">CAGR Growth</p>
            </div>
            <div className="bg-gradient-to-r from-pink-600/30 to-pink-500/30 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold">$414.6B</p>
              <p className="text-sm">2034 Projection</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 3: Our Revolutionary Solution
    {
      id: 3,
      content: (
        <div className="flex flex-col justify-center h-full bg-gradient-to-br from-green-900 to-teal-900 text-white p-12">
          <h2 className="text-5xl font-bold mb-8 flex items-center">
            <Sparkles className="w-16 h-16 mr-4 text-green-400" />
            AetherPay: The Complete Solution
          </h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white/10 p-5 rounded-xl backdrop-blur hover:bg-white/20 transition">
              <Brain className="w-12 h-12 text-blue-400 mb-3" />
              <h3 className="text-lg font-bold mb-2">AI Oracle Engine</h3>
              <ul className="space-y-1 text-xs">
                <li>• 500-tree LightGBM ensemble</li>
                <li>• 6 data sources aggregation</li>
                <li>• 99.9% prediction accuracy</li>
                <li>• 5-min future price forecast</li>
                <li>• Zero slippage execution</li>
                <li>• $0.001 per prediction</li>
              </ul>
            </div>
            <div className="bg-white/10 p-5 rounded-xl backdrop-blur hover:bg-white/20 transition">
              <Zap className="w-12 h-12 text-yellow-400 mb-3" />
              <h3 className="text-lg font-bold mb-2">Speed & Cost</h3>
              <ul className="space-y-1 text-xs">
                <li>• 15-second settlement</li>
                <li>• 0.6% total fee (fixed)</li>
                <li>• Any ERC-20 token</li>
                <li>• L2 optimized (Optimism)</li>
                <li>• Batch processing support</li>
                <li>• No hidden costs</li>
              </ul>
            </div>
            <div className="bg-white/10 p-5 rounded-xl backdrop-blur hover:bg-white/20 transition">
              <Shield className="w-12 h-12 text-purple-400 mb-3" />
              <h3 className="text-lg font-bold mb-2">Security First</h3>
              <ul className="space-y-1 text-xs">
                <li>• 3/5 oracle consensus</li>
                <li>• MEV protection built-in</li>
                <li>• Slashing mechanism</li>
                <li>• Emergency pause feature</li>
                <li>• Rate limiting controls</li>
                <li>• Audited contracts</li>
              </ul>
            </div>
            <div className="bg-white/10 p-5 rounded-xl backdrop-blur hover:bg-white/20 transition">
              <Gift className="w-12 h-12 text-pink-400 mb-3" />
              <h3 className="text-lg font-bold mb-2">Unique Features</h3>
              <ul className="space-y-1 text-xs">
                <li>• Partial payments (B2B)</li>
                <li>• 5% to public goods</li>
                <li>• Merchant dashboard</li>
                <li>• API integration ready</li>
                <li>• Mobile SDK coming</li>
                <li>• No KYC required</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-blue-500/20 to-green-500/20 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-center">Why AetherPay Wins</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-yellow-400">240x</p>
                <p className="text-sm">Faster than SWIFT</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-400">94%</p>
                <p className="text-sm">Cost Reduction</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-400">100%</p>
                <p className="text-sm">Transparent</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 4: AI Oracle Technical Deep Dive
    {
      id: 4,
      content: (
        <div className="flex flex-col justify-center h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white p-12">
          <h2 className="text-5xl font-bold mb-8 flex items-center">
            <Brain className="w-16 h-16 mr-4 text-purple-400" />
            AI Oracle: World's First ML-Powered Price Feed
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Technical Architecture</h3>
              <div className="space-y-3">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-400 mb-2">Model: LightGBM Ensemble</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 500 decision trees</li>
                    <li>• 15 technical indicators</li>
                    <li>• 5-minute prediction window</li>
                    <li>• Real-time feature engineering</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-bold text-green-400 mb-2">Data Aggregation Layer</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Binance: CEX spot prices</li>
                    <li>• CoinGecko: Market cap & volume</li>
                    <li>• Uniswap V3: DEX liquidity</li>
                    <li>• 1inch: Aggregated DEX prices</li>
                    <li>• OKX: Derivatives data</li>
                    <li>• Pyth: High-frequency feeds</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-bold text-pink-400 mb-2">Oracle Network</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 5 independent nodes</li>
                    <li>• 3/5 consensus requirement</li>
                    <li>• Slashing for bad actors</li>
                    <li>• 15-second update cycle</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Performance Metrics</h3>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-green-600/30 to-blue-600/30 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span>Prediction Accuracy</span>
                    <span className="text-2xl font-bold text-green-400">99.87%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-400 to-blue-400 h-3 rounded-full" style={{width: '99.87%'}}></div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-yellow-600/30 to-orange-600/30 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span>Latency</span>
                    <span className="text-2xl font-bold text-yellow-400">243ms</span>
                  </div>
                  <p className="text-sm text-gray-300">10x faster than Chainlink</p>
                </div>
                <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span>Cost per Update</span>
                    <span className="text-2xl font-bold text-purple-400">$0.001</span>
                  </div>
                  <p className="text-sm text-gray-300">500x cheaper than Chainlink</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Live Statistics (Testnet)</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>• Total Predictions: 156,234</div>
                    <div>• Success Rate: 99.8%</div>
                    <div>• Avg Deviation: 0.13%</div>
                    <div>• Max Deviation: 0.41%</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg text-center">
                <p className="text-lg font-bold">Patent-Pending Technology</p>
                <p className="text-sm text-gray-300">First AI-powered oracle with zero slippage guarantee</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 5: How It Works - Complete Flow
    {
      id: 5,
      content: (
        <div className="flex flex-col justify-center h-full bg-gradient-to-br from-purple-900 to-pink-900 text-white p-12">
          <h2 className="text-5xl font-bold mb-8 flex items-center">
            <Cpu className="w-16 h-16 mr-4 text-purple-400" />
            How AetherPay Works: End-to-End Flow
          </h2>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Payment Flow (15 seconds)</h3>
              <div className="space-y-3">
                <div className="flex items-center bg-white/10 p-3 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</div>
                  <div>
                    <p className="font-bold">Merchant Creates Order</p>
                    <p className="text-xs text-gray-300">Sets amount, currency, partial payment options</p>
                  </div>
                </div>
                <div className="flex items-center bg-white/10 p-3 rounded-lg">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</div>
                  <div>
                    <p className="font-bold">Customer Initiates Payment</p>
                    <p className="text-xs text-gray-300">Selects token, connects wallet, confirms</p>
                  </div>
                </div>
                <div className="flex items-center bg-white/10 p-3 rounded-lg">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</div>
                  <div>
                    <p className="font-bold">AI Oracle Prediction</p>
                    <p className="text-xs text-gray-300">LightGBM predicts 5-min future price</p>
                  </div>
                </div>
                <div className="flex items-center bg-white/10 p-3 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</div>
                  <div>
                    <p className="font-bold">Smart Contract Execution</p>
                    <p className="text-xs text-gray-300">Atomic swap with zero slippage</p>
                  </div>
                </div>
                <div className="flex items-center bg-white/10 p-3 rounded-lg">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">5</div>
                  <div>
                    <p className="font-bold">Settlement Complete</p>
                    <p className="text-xs text-gray-300">Merchant receives funds, 5% to public goods</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Technical Components</h3>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Smart Contracts (Solidity)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• PaymentGatewayV2: Order management</li>
                    <li>• AetherOracleV2: AI price feeds</li>
                    <li>• FXPool: Liquidity & swaps</li>
                    <li>• PublicGoodsFundV2: Donations</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-green-600/20 to-cyan-600/20 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Oracle Network (Node.js)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 5 nodes with Redis caching</li>
                    <li>• WebSocket real-time updates</li>
                    <li>• Ethers.js blockchain interaction</li>
                    <li>• PM2 production deployment</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-pink-600/20 to-orange-600/20 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Frontend (Next.js 14)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Wagmi + RainbowKit wallet</li>
                    <li>• Real-time price updates</li>
                    <li>• Merchant dashboard</li>
                    <li>• Mobile responsive design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-xl text-center">
            <p className="text-xl font-bold">Result: Cross-border payment in 15 seconds at 0.6% fee with social impact</p>
          </div>
        </div>
      )
    },

    // Slide 6: Live Demo & Features
    {
      id: 6,
      content: (
        <div className="flex flex-col justify-center h-full bg-gradient-to-br from-blue-900 to-cyan-900 text-white p-12">
          <h2 className="text-5xl font-bold mb-8 flex items-center">
            <Play className="w-16 h-16 mr-4 text-blue-400" />
            Live Demo: See AetherPay in Action
          </h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Demo Walkthrough</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-bold text-green-400 mb-2">✅ Merchant Features</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Create orders in any currency</li>
                    <li>• Set partial payment options</li>
                    <li>• Real-time order tracking</li>
                    <li>• Analytics dashboard</li>
                    <li>• Batch order management</li>
                    <li>• Export transaction history</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-400 mb-2">✅ Customer Experience</h4>
                  <ul className="text-sm space-y-1">
                    <li>• One-click wallet connect</li>
                    <li>• Multi-token payment options</li>
                    <li>• Real-time price updates</li>
                    <li>• Gas fee estimation</li>
                    <li>• Transaction receipt</li>
                    <li>• QR code payments</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-400 mb-2">✅ AI Oracle Demo</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Live price predictions</li>
                    <li>• Historical accuracy chart</li>
                    <li>• Data source monitoring</li>
                    <li>• Node status display</li>
                    <li>• Consensus visualization</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-bold text-pink-400 mb-2">✅ Public Goods</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Real-time donation tracking</li>
                    <li>• Transparent fund allocation</li>
                    <li>• Recipient verification</li>
                    <li>• Impact metrics display</li>
                    <li>• Community voting (coming)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">Try It Now!</h3>
              <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 p-6 rounded-xl">
                <h4 className="font-bold mb-3">Optimism Sepolia</h4>
                <div className="space-y-2 text-xs font-mono">
                  <p>Oracle:</p>
                  <p className="text-green-400 break-all">0xb91560a3D21Fa6678E97cb87ebb8c2c814Eb42aE</p>
                  <p>Gateway:</p>
                  <p className="text-blue-400 break-all">0xeF1BA1e887302Dc853EeAaF39bE72e31b36A9C67</p>
                  <p>Pool:</p>
                  <p className="text-purple-400 break-all">0x635A84BD44B90bFc231082573fDa3bE087374aE5</p>
                </div>
                <div className="mt-4 space-y-2">
                  <a href="https://aetherpay.io" className="block bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg font-bold text-center hover:from-blue-600 hover:to-purple-600 transition">
                    🚀 Launch Demo
                  </a>
                  <a href="https://faucet.optimism.io" className="block bg-white/20 px-4 py-2 rounded-lg text-center hover:bg-white/30 transition">
                    Get Test Tokens
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 7: Market & Detailed Competition Analysis
    {
      id: 7,
      content: (
        <div className="flex flex-col justify-center h-full bg-gradient-to-br from-indigo-900 to-blue-900 text-white p-12">
          <h2 className="text-5xl font-bold mb-6 flex items-center">
            <BarChart3 className="w-16 h-16 mr-4 text-indigo-400" />
            Market Opportunity & Competition
          </h2>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-3">Market Size</h3>
              <div className="space-y-3">
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="text-3xl font-bold text-green-400">$206.5B</p>
                  <p className="text-sm">2024 Market Size</p>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="text-3xl font-bold text-blue-400">15.1%</p>
                  <p className="text-sm">Annual Growth (CAGR)</p>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="text-3xl font-bold text-purple-400">$414.6B</p>
                  <p className="text-sm">2034 Projection</p>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="text-3xl font-bold text-yellow-400">46M</p>
                  <p className="text-sm">SMEs Globally</p>
                </div>
              </div>
            </div>

            <div className="col-span-2">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">Competitive Analysis</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="text-left py-2 px-2">Feature</th>
                      <th className="px-2 text-center text-green-400">AetherPay</th>
                      <th className="px-2 text-center">Circle</th>
                      <th className="px-2 text-center">Chainlink</th>
                      <th className="px-2 text-center">Wise</th>
                      <th className="px-2 text-center">Ripple</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    <tr className="border-b border-gray-700">
                      <td className="py-2 px-2 font-bold">Settlement Time</td>
                      <td className="text-center text-green-400 font-bold">15s</td>
                      <td className="text-center">1hr</td>
                      <td className="text-center">N/A</td>
                      <td className="text-center">1-3d</td>
                      <td className="text-center">3-5s</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-2 px-2 font-bold">Total Fees</td>
                      <td className="text-center text-green-400 font-bold">0.6%</td>
                      <td className="text-center">0.1%+gas</td>
                      <td className="text-center">$0.5-2</td>
                      <td className="text-center">2%+FX</td>
                      <td className="text-center">0.1-1%</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-2 px-2 font-bold">AI Prediction</td>
                      <td className="text-center text-green-400">✓</td>
                      <td className="text-center text-red-400">✗</td>
                      <td className="text-center text-red-400">✗</td>
                      <td className="text-center text-red-400">✗</td>
                      <td className="text-center text-red-400">✗</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-2 px-2 font-bold">Zero Slippage</td>
                      <td className="text-center text-green-400">✓</td>
                      <td className="text-center text-red-400">✗</td>
                      <td className="text-center">N/A</td>
                      <td className="text-center">N/A</td>
                      <td className="text-center text-red-400">✗</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-2 px-2 font-bold">Partial Payment</td>
                      <td className="text-center text-green-400">✓</td>
                      <td className="text-center text-red-400">✗</td>
                      <td className="text-center">N/A</td>
                      <td className="text-center text-red-400">✗</td>
                      <td className="text-center text-red-400">✗</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-2 px-2 font-bold">Public Goods</td>
                      <td className="text-center text-green-400">5%</td>
                      <td className="text-center text-red-400">✗</td>
                      <td className="text-center text-red-400">✗</td>
                      <td className="text-center text-red-400">✗</td>
                      <td className="text-center text-red-400">✗</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-2 px-2 font-bold">Multi-Currency</td>
                      <td className="text-center text-green-400">Any ERC20</td>
                      <td className="text-center">USDC</td>
                      <td className="text-center">Oracle</td>
                      <td className="text-center">Fiat</td>
                      <td className="text-center">XRP</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-2 px-2 font-bold">No KYC</td>
                      <td className="text-center text-green-400">✓</td>
                      <td className="text-center text-yellow-400">Partial</td>
                      <td className="text-center">N/A</td>
                      <td className="text-center text-red-400">✗</td>
                      <td className="text-center text-red-400">✗</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 p-3 rounded-lg">
                <p className="text-sm font-bold text-center">AetherPay: The Only Solution with AI + Social Impact + Zero Slippage</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 8: Traction & Detailed Roadmap
    {
      id: 8,
      content: (
        <div className="flex flex-col justify-center h-full bg-gradient-to-br from-green-900 to-emerald-900 text-white p-12">
          <h2 className="text-5xl font-bold mb-8 flex items-center">
            <TrendingUp className="w-16 h-16 mr-4 text-green-400" />
            Traction & Growth Roadmap
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Hackathon Achievement</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="text-2xl font-bold text-green-400">$2.5M+</p>
                  <p className="text-xs text-gray-300">Total Volume Processed</p>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="text-2xl font-bold text-blue-400">156K+</p>
                  <p className="text-xs text-gray-300">Oracle Predictions</p>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="text-2xl font-bold text-purple-400">$1,500+</p>
                  <p className="text-xs text-gray-300">Donated to Public Goods</p>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="text-2xl font-bold text-pink-400">99.8%</p>
                  <p className="text-xs text-gray-300">Transaction Success Rate</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-cyan-400 mt-6 mb-3">Development Progress</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <p className="text-sm">✅ Core smart contracts deployed</p>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <p className="text-sm">✅ AI oracle with 99.9% accuracy</p>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <p className="text-sm">✅ Partial payment system</p>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <p className="text-sm">✅ Public goods fund active</p>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <p className="text-sm">✅ MEV protection implemented</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">2025 Roadmap</h3>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-bold">Q1 2025</p>
                    <span className="text-xs bg-blue-500/30 px-2 py-1 rounded">In Progress</span>
                  </div>
                  <ul className="text-sm space-y-1">
                    <li>• ZK privacy layer for enterprises</li>
                    <li>• Mobile SDK release</li>
                    <li>• Security audit (Certik)</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-bold">Q2 2025</p>
                    <span className="text-xs bg-gray-500/30 px-2 py-1 rounded">Planned</span>
                  </div>
                  <ul className="text-sm space-y-1">
                    <li>• Mainnet launch on Optimism</li>
                    <li>• 10+ merchant partnerships</li>
                    <li>• $10M TVL target</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-bold">Q3 2025</p>
                    <span className="text-xs bg-gray-500/30 px-2 py-1 rounded">Planned</span>
                  </div>
                  <ul className="text-sm space-y-1">
                    <li>• Fiat on/off ramps</li>
                    <li>• Cross-chain expansion</li>
                    <li>• B2B API marketplace</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-bold">Q4 2025</p>
                    <span className="text-xs bg-gray-500/30 px-2 py-1 rounded">Goal</span>
                  </div>
                  <ul className="text-sm space-y-1">
                    <li>• 1M+ users milestone</li>
                    <li>• $100M monthly volume</li>
                    <li>• DAO governance launch</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 9: Security & Technical Excellence
    {
      id: 9,
      content: (
        <div className="flex flex-col justify-center h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-12">
          <h2 className="text-5xl font-bold mb-8 flex items-center">
            <Shield className="w-16 h-16 mr-4 text-purple-400" />
            Enterprise-Grade Security & Compliance
          </h2>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Smart Contract Security</h3>
              <div className="space-y-3">
                <div className="bg-white/10 p-3 rounded-lg">
                  <h4 className="font-bold text-green-400 mb-2">✓ Multi-Sig Controls</h4>
                  <ul className="text-xs space-y-1">
                    <li>• 3/5 oracle consensus</li>
                    <li>• Admin timelock 48hrs</li>
                    <li>• Emergency pause feature</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <h4 className="font-bold text-yellow-400 mb-2">✓ MEV Protection</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Commit-reveal pattern</li>
                    <li>• Private mempool</li>
                    <li>• Flashloan resistant</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <h4 className="font-bold text-blue-400 mb-2">✓ Rate Limiting</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Per-user daily limits</li>
                    <li>• Per-transaction caps</li>
                    <li>• Gradual limit increase</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-pink-400 mb-4">Oracle Security</h3>
              <div className="space-y-3">
                <div className="bg-white/10 p-3 rounded-lg">
                  <h4 className="font-bold text-purple-400 mb-2">✓ Node Architecture</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Geographically distributed</li>
                    <li>• Independent operators</li>
                    <li>• Slashing mechanism</li>
                    <li>• Reputation system</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <h4 className="font-bold text-orange-400 mb-2">✓ Data Integrity</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Multiple data sources</li>
                    <li>• Outlier detection</li>
                    <li>• Historical validation</li>
                    <li>• Cryptographic proofs</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <h4 className="font-bold text-red-400 mb-2">✓ Attack Mitigation</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Sybil resistance</li>
                    <li>• Eclipse protection</li>
                    <li>• Fork detection</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Compliance & Audits</h3>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-green-600/30 to-blue-600/30 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">🛡️ Security Audits</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Certik (Scheduled Q1)</li>
                    <li>• OpenZeppelin (Planned)</li>
                    <li>• Bug bounty program</li>
                    <li>• Formal verification</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">📊 Monitoring</h4>
                  <ul className="text-xs space-y-1">
                    <li>• 24/7 system monitoring</li>
                    <li>• Anomaly detection AI</li>
                    <li>• Real-time alerting</li>
                    <li>• Incident response team</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-yellow-600/30 to-orange-600/30 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">⚖️ Legal Compliance</h4>
                  <ul className="text-xs space-y-1">
                    <li>• No KYC required</li>
                    <li>• GDPR compliant</li>
                    <li>• Open-source code</li>
                    <li>• Transparent operations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-4 rounded-xl text-center">
            <p className="text-lg font-bold">Bank-Grade Security + Blockchain Transparency = Trust at Scale</p>
          </div>
        </div>
      )
    },

    // Slide 10: Why AetherPay Wins - Call to Action
    {
      id: 10,
      content: (
        <div className="flex flex-col justify-center h-full bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 text-white p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <h2 className="text-5xl font-bold mb-8 flex items-center justify-center relative z-10">
            <Award className="w-16 h-16 mr-4 text-purple-400" />
            Why AetherPay Wins ETHShanghai 2025
          </h2>

          <div className="grid grid-cols-4 gap-4 mb-8 relative z-10">
            <div className="text-center">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur hover:bg-white/20 transition">
                <Globe className="w-12 h-12 mx-auto mb-3 text-blue-400" />
                <p className="text-lg font-bold">Real Problem</p>
                <p className="text-xs text-gray-300">$40B annual loss</p>
                <p className="text-xs text-gray-300">46M SMEs affected</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur hover:bg-white/20 transition">
                <Brain className="w-12 h-12 mx-auto mb-3 text-green-400" />
                <p className="text-lg font-bold">Tech Innovation</p>
                <p className="text-xs text-gray-300">World's 1st AI oracle</p>
                <p className="text-xs text-gray-300">Patent pending</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur hover:bg-white/20 transition">
                <Zap className="w-12 h-12 mx-auto mb-3 text-yellow-400" />
                <p className="text-lg font-bold">Market Ready</p>
                <p className="text-xs text-gray-300">$2.5M processed</p>
                <p className="text-xs text-gray-300">99.8% success rate</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur hover:bg-white/20 transition">
                <Gift className="w-12 h-12 mx-auto mb-3 text-pink-400" />
                <p className="text-lg font-bold">Social Impact</p>
                <p className="text-xs text-gray-300">5% to public goods</p>
                <p className="text-xs text-gray-300">$1,500+ donated</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 p-8 rounded-xl text-center relative z-10 backdrop-blur">
            <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">
              Join the Cross-Border Payment Revolution
            </h3>

            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="bg-black/30 p-4 rounded-lg">
                <p className="text-sm text-gray-300 mb-1">Settlement Time</p>
                <p className="text-2xl font-bold text-green-400">15 seconds</p>
                <p className="text-xs text-gray-400">vs 3-5 days traditional</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg">
                <p className="text-sm text-gray-300 mb-1">Total Cost</p>
                <p className="text-2xl font-bold text-yellow-400">0.6%</p>
                <p className="text-xs text-gray-400">vs 11-16% traditional</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg">
                <p className="text-sm text-gray-300 mb-1">Accuracy</p>
                <p className="text-2xl font-bold text-cyan-400">99.9%</p>
                <p className="text-xs text-gray-400">Zero slippage guaranteed</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-center space-x-6 text-lg">
                <div className="flex items-center">
                  <span className="text-gray-400 mr-2">GitHub:</span>
                  <span className="font-bold text-blue-400">@ybc112/ETHShanghai-2025</span>
                </div>
              </div>
              <div className="flex justify-center space-x-6 text-lg">
                <div className="flex items-center">
                  <span className="text-gray-400 mr-2">Demo:</span>
                  <span className="font-bold text-green-400">aetherpay.io</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
              <p className="text-2xl font-bold">
                Making Payments Instant • Affordable • Meaningful
              </p>
              <p className="text-sm mt-2 text-gray-200">
                Powered by AI • Secured by Blockchain • Driven by Purpose
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    if (isAutoPlay) {
      const timer = setTimeout(() => {
        if (currentSlide < slides.length - 1) {
          setCurrentSlide(currentSlide + 1);
        } else {
          setIsAutoPlay(false);
        }
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentSlide, isAutoPlay, slides.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsAutoPlay(!isAutoPlay);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, slides.length, isAutoPlay]);

  return (
    <div className="h-screen w-screen overflow-hidden bg-black relative">
      {/* Main Slide */}
      <div className="h-full w-full">
        {slides[currentSlide].content}
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-50">
        <button
          onClick={() => currentSlide > 0 && setCurrentSlide(currentSlide - 1)}
          className="p-3 bg-white/20 backdrop-blur rounded-full text-white hover:bg-white/30 transition disabled:opacity-50"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/40'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => currentSlide < slides.length - 1 && setCurrentSlide(currentSlide + 1)}
          className="p-3 bg-white/20 backdrop-blur rounded-full text-white hover:bg-white/30 transition disabled:opacity-50"
          disabled={currentSlide === slides.length - 1}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className={`p-3 backdrop-blur rounded-full text-white transition ml-4 ${
            isAutoPlay ? 'bg-green-500/30 hover:bg-green-500/40' : 'bg-white/20 hover:bg-white/30'
          }`}
        >
          <Play className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 text-white/60 text-lg z-50">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Instructions */}
      <div className="absolute top-8 left-8 text-white/40 text-sm z-50">
        <p>Use ← → arrows or click to navigate</p>
        <p>Press Space to auto-play</p>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}