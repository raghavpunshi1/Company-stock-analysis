export const DUMMY_ANALYSIS_DATA = {
    "company_name": "Tata Motors Limited",
    "ticker": "NSE:TATAMOTORS",
    "analysis_date": "2024-05-21",
    "sector": "Automotive",
    "company_position": "India's largest commercial vehicle manufacturer and a leading passenger vehicle player. Global presence through its subsidiary Jaguar Land Rover (JLR). Dominant market leader in India's electric passenger vehicle segment.",
    "data_source": "Your training knowledge (cutoff April 2024 + latest updates)",
    "data_staleness_warning": "Latest company news and financial data in training data is from April 2024. User should check for Q4 FY24 results commentary and any subsequent corporate announcements.",
    "this_stock_relative_valuation": "Significant Discount (10.28x vs 25.0x median). This is due to the cyclical nature of JLR and historical losses, but the discount appears large given the recent performance.",
    "peer_median_pe": 25.0,
    "analysis_metadata": null,
    "company_identification": null,
    "stock_price": {
        "value": 985.0,
        "unit": "INR per share",
        "date": "2024-04-30 (most recent known)",
        "note": "This is the last known price from the training data cutoff. The current price on the analysis date may differ.",
        "source": "Training data",
        "confidence": 0.99
    },
    "market_cap": {
        "value": 327020.0,
        "unit": "INR Crores",
        "calculation": "985.0 (Price) * 3320000000 (Shares)",
        "source": "Calculated",
        "confidence": 0.98
    },
    "shares_outstanding": {
        "value": 3320000000,
        "unit": "Shares (Ordinary)",
        "source": "Training data (based on FY24 filings)",
        "confidence": 0.99
    },
    "financial_metrics": {
        "years_data": [
            {
                "fy": "FY24",
                "fiscal_year_end": "2024-03-31",
                "revenue": {
                    "value": 437928,
                    "unit": "INR Cr",
                    "source": "Annual Report FY24",
                    "yoy_growth": {
                        "value": 26.6,
                        "unit": "%",
                        "calculation": "(437928 - 345967) / 345967 * 100"
                    },
                    "confidence": 0.99
                },
                "profit": {
                    "pat": {
                        "value": 31807,
                        "unit": "INR Cr",
                        "source": "Annual Report FY24",
                        "note": "Represents a significant turnaround from a profit of 2690 Cr in FY23."
                    },
                    "net_margin": {
                        "value": 7.26,
                        "unit": "%",
                        "calculation": "31807 / 437928 * 100"
                    },
                    "yoy_growth": {
                        "value": 1082.4,
                        "unit": "%",
                        "calculation": "(31807 - 2690) / 2690 * 100"
                    },
                    "confidence": 0.99
                },
                "ebitda": {
                    "value": 62800,
                    "unit": "INR Cr",
                    "margin": {
                        "value": 14.34,
                        "unit": "%",
                        "calculation": "62800 / 437928 * 100"
                    },
                    "confidence": 0.98
                },
                "debt": {
                    "total_debt": {
                        "value": 149500,
                        "unit": "INR Cr",
                        "source": "Balance Sheet FY24"
                    },
                    "cash": {
                        "value": 44300,
                        "unit": "INR Cr"
                    },
                    "net_debt": {
                        "value": 105200,
                        "unit": "INR Cr",
                        "calculation": "149500 - 44300"
                    },
                    "net_debt_to_ebitda": {
                        "value": 1.67,
                        "unit": "times",
                        "rating": "SAFE (<2.5x)",
                        "calculation": "105200 / 62800"
                    },
                    "confidence": 0.98
                }
            },
            {
                "fy": "FY23",
                "fiscal_year_end": "2023-03-31",
                "revenue": {
                    "value": 345967,
                    "unit": "INR Cr",
                    "source": "Annual Report FY23",
                    "yoy_growth": {
                        "value": 24.2,
                        "unit": "%",
                        "calculation": "(345967 - 278454) / 278454 * 100"
                    },
                    "confidence": 0.99
                },
                "profit": {
                    "pat": {
                        "value": 2690,
                        "unit": "INR Cr",
                        "source": "Annual Report FY23",
                        "note": "Turned profitable after several years of losses."
                    },
                    "net_margin": {
                        "value": 0.78,
                        "unit": "%",
                        "calculation": "2690 / 345967 * 100"
                    },
                    "yoy_growth": {
                        "value": 123.6,
                        "unit": "%",
                        "note": "Calculated against a loss in the previous year, indicating a turnaround."
                    },
                    "confidence": 0.99
                },
                "ebitda": {
                    "value": 37100,
                    "unit": "INR Cr",
                    "margin": {
                        "value": 10.72,
                        "unit": "%",
                        "calculation": "37100 / 345967 * 100"
                    },
                    "confidence": 0.98
                },
                "debt": {
                    "total_debt": {
                        "value": 160700,
                        "unit": "INR Cr",
                        "source": "Balance Sheet FY23"
                    },
                    "cash": {
                        "value": 43700,
                        "unit": "INR Cr"
                    },
                    "net_debt": {
                        "value": 117000,
                        "unit": "INR Cr",
                        "calculation": "160700 - 43700"
                    },
                    "net_debt_to_ebitda": {
                        "value": 3.15,
                        "unit": "times",
                        "rating": "HIGH (>3.0x)",
                        "calculation": "117000 / 37100"
                    },
                    "confidence": 0.98
                }
            },
            {
                "fy": "FY22",
                "fiscal_year_end": "2022-03-31",
                "revenue": {
                    "value": 278454,
                    "unit": "INR Cr",
                    "source": "Annual Report FY22",
                    "yoy_growth": null
                },
                "profit": {
                    "pat": {
                        "value": -11441,
                        "unit": "INR Cr",
                        "source": "Annual Report FY22"
                    },
                    "net_margin": {
                        "value": -4.11,
                        "unit": "%",
                        "calculation": "-11441 / 278454 * 100"
                    },
                    "yoy_growth": null
                },
                "ebitda": {
                    "value": 28900,
                    "unit": "INR Cr",
                    "margin": {
                        "value": 10.38,
                        "unit": "%"
                    }
                },
                "debt": {
                    "total_debt": {
                        "value": 162900,
                        "unit": "INR Cr",
                        "source": "Balance Sheet FY22"
                    },
                    "cash": {
                        "value": 45600,
                        "unit": "INR Cr"
                    },
                    "net_debt": {
                        "value": 117300,
                        "unit": "INR Cr",
                        "calculation": "162900 - 45600"
                    },
                    "net_debt_to_ebitda": {
                        "value": 4.06,
                        "unit": "times",
                        "rating": "VERY HIGH (>4.0x)",
                        "calculation": "117300 / 28900"
                    }
                }
            }
        ],
        "summary_metrics": {
            "revenue_cagr_3yr": {
                "value": 25.4,
                "unit": "% per year",
                "calculation": "[(437928 / 278454) ^ (1/2)] - 1",
                "confidence": 0.95
            },
            "profit_trend": "Strong turnaround from a loss of -11441 Cr in FY22 to a profit of 31807 Cr in FY24.",
            "latest_credit_rating": {
                "value": "AA+",
                "agency": "CRISIL",
                "outlook": "Stable",
                "date": "2024-03-01",
                "confidence": 0.9
            },
            "debt_trend": "Deleveraging successfully. Net Debt/EBITDA improved from 4.06x in FY22 to a healthy 1.67x in FY24.",
            "profitability_trend": "Rapidly improving. Net margin turned positive in FY23 and expanded significantly to 7.26% in FY24."
        }
    },
    "debt_analysis": null,
    "valuation": {
        "eps": {
            "value": 95.8,
            "unit": "INR per share",
            "calculation": "31807 Cr (PAT) / 3.32B (Shares)",
            "confidence": 0.98
        },
        "pe_ratio": {
            "value": 10.28,
            "unit": "times",
            "calculation": "985 (Price) / 95.8 (EPS)",
            "confidence": 0.98
        },
        "price_to_book": {
            "value": 3.1,
            "unit": "times",
            "source": "Calculated from FY24 book value",
            "confidence": 0.9
        },
        "peg_ratio": {
            "value": 0.25,
            "unit": "times",
            "assessment": "Very Attractive (<0.5)",
            "calculation": "10.28 (P/E) / 40 (PROXY - Forward growth estimate based on turnaround momentum)",
            "confidence": 0.75
        },
        "valuation_status": "Appears inexpensive on a trailing P/E basis (10.28x) due to the sharp profit recovery in FY24. Forward P/E will be a better indicator."
    },
    "competitor_comparison": [
        {
            "company": "Maruti Suzuki India Ltd.",
            "ticker": "MARUTI.NS",
            "pe_ratio": 28.5,
            "growth_rate": 15.0,
            "net_margin": 9.5,
            "yr1_return": 25.0
        },
        {
            "company": "Mahindra & Mahindra Ltd.",
            "ticker": "M&M.NS",
            "pe_ratio": 18.5,
            "growth_rate": 18.0,
            "net_margin": 10.5,
            "yr1_return": 45.0
        },
        {
            "company": "Ashok Leyland Ltd.",
            "ticker": "ASHOKLEY.NS",
            "pe_ratio": 25.0,
            "growth_rate": 12.0,
            "net_margin": 5.5,
            "yr1_return": 10.0
        }
    ],
    "technical": {
        "high_52week": {
            "value": 1065.6,
            "unit": "INR",
            "date": "2024-03-05 (Known from memory)"
        },
        "low_52week": {
            "value": 505.0,
            "unit": "INR",
            "date": "2023-05-22 (Known from memory)"
        },
        "current_price_in_range": "85.6% (Near highs, showing strong momentum)",
        "moving_averages": {
            "ma_200day": {
                "value": 850,
                "signal": "Price is significantly ABOVE = strong long-term uptrend"
            },
            "ma_50day": {
                "value": 970,
                "signal": "Price is trading around its 50-day MA, indicating potential consolidation or support"
            }
        },
        "trend": "STRONG UPTREND",
        "technical_rating": "9/10 (Strongly Bullish)"
    },
    "recent_developments": [
        {
            "news": "Announced demerger of Commercial Vehicles (CV) and Passenger Vehicles (PV) businesses into two separate listed entities.",
            "date": "2024-03-04",
            "sentiment": "Positive",
            "source": "Press release (in training data)",
            "impact": "Expected to unlock value by allowing focused strategy and capital allocation for each business."
        },
        {
            "news": "Jaguar Land Rover (JLR) division reported record-breaking profits and strong free cash flow, driving the overall company's performance.",
            "date": "2024-Q1 (Jan-Mar)",
            "sentiment": "Very Positive",
            "source": "Quarterly reports (in training data)",
            "impact": "Alleviated concerns about JLR's profitability and debt, which were major overhangs."
        }
    ],
    "analyst_consensus": {
        "num_analysts": 30,
        "consensus_rating": "STRONG BUY",
        "rating_distribution": {
            "buy_percent": 85,
            "hold_percent": 10,
            "sell_percent": 5
        },
        "average_target_price": 1150,
        "target_vs_current": "+16.7% upside",
        "recent_changes": "Multiple upgrades following strong JLR performance and demerger announcement.",
        "confidence": 0.85
    },
    "fair_value": {
        "pe_based": {
            "methodology": "Applying a conservative forward P/E of 15x (discount to peers, accounting for cyclicality) to an estimated FY25 EPS of Rs 110.",
            "fair_value": 1650,
            "current_price": 985,
            "upside_downside": "+67.5% (significantly undervalued)",
            "confidence": 0.7
        }
    },
    "scenarios": [
        {
            "case": "BEAR",
            "assumption": "Global auto slowdown hits JLR, domestic competition intensifies. FY25 EPS falls to Rs 80. P/E contracts to 10x.",
            "eps_estimate": 80,
            "target_price": 800,
            "downside": "-18.8%",
            "probability": "20%"
        },
        {
            "case": "BASE",
            "assumption": "JLR maintains momentum, domestic business grows steadily. FY25 EPS at Rs 110. P/E normalizes to 13x.",
            "eps_estimate": 110,
            "target_price": 1430,
            "upside": "+45.2%",
            "probability": "60%"
        },
        {
            "case": "BULL",
            "assumption": "JLR exceeds expectations, EV business gains further market share, demerger unlocks significant value. FY25 EPS reaches Rs 130. P/E expands to 16x.",
            "eps_estimate": 130,
            "target_price": 2080,
            "upside": "+111.2%",
            "probability": "20%"
        }
    ],
    "investment_decision": {
        "company_quality": "GOOD & IMPROVING (Successful turnaround, market leadership in key segments, and significant deleveraging. Brand strength is a major asset.)",
        "valuation_assessment": "ATTRACTIVE (Trading at a significant discount to peers on a trailing basis. Forward P/E also suggests undervaluation given the growth trajectory.)",
        "technical_outlook": "BULLISH (In a strong long-term uptrend, with price consistently above key moving averages.)",
        "sentiment": "VERY POSITIVE (Strong analyst consensus, positive news flow around JLR turnaround and value-unlocking demerger.)",
        "final_verdict": "BUY",
        "conviction_level": 85,
        "conviction_scale": "out of 100",
        "reasoning": "The investment thesis is based on a successful and ongoing business turnaround, particularly at JLR, which has led to rapid deleveraging and margin expansion. The company's leadership in the Indian EV market provides a strong future growth driver. The upcoming demerger is a significant catalyst for value unlocking. Valuation appears attractive relative to both peers and its own growth prospects. The risk-reward profile is highly favorable.",
        "key_risks": [
            "Cyclical downturn in the global luxury auto market affecting JLR.",
            "Increased competition in the Indian EV space from global and domestic players.",
            "Execution risks related to the demerger of businesses."
        ],
        "target_price_12m": 1430,
        "stop_loss": 850,
        "entry_price": 970
    },
    "action_plan": {
        "verdict": "BUY",
        "entry_price": {
            "primary": 970,
            "reason": "Entry near the 50-day moving average provides a good support level and a better risk-reward entry point."
        },
        "stop_loss": {
            "price": 850,
            "reason": "A break below the 200-day moving average would signal a potential reversal of the long-term uptrend."
        },
        "profit_target": {
            "price": 1430,
            "reason": "Base case scenario target, reflecting a normalized P/E of 13x on FY25 estimated earnings."
        },
        "position_size": "3-5% of portfolio (high conviction idea with moderate risk)",
        "monitoring": [
            "Quarterly performance of the JLR division (margins and volumes are key).",
            "Market share trends in the domestic PV and EV segments.",
            "Progress and timeline updates on the announced demerger."
        ]
    },
    "confidence_metrics": null,
    "execution_checklist": null
}