
        // Application State
        let appState = {
            currentLanguage: 'en',
            darkMode: false,
            highContrast: false,
            fontSize: 16,
            user: {
                name: 'Aisha',
                location: 'Nairobi, Kenya',
                streak: 7,
                points: 450
            },
            culturalContext: 'east-africa'
        };

        // Translations object for multilingual support
        const translations = {
            en: {
                'main-title': 'AI-Powered Learning for Everyone',
                'main-subtitle': 'Breaking barriers to quality education through inclusive, culturally-adaptive AI technology. Learn at your pace, in your language, from anywhere.',
                'welcome-text': 'Welcome back, Aisha!',
                'location-text': 'Learning from Nairobi, Kenya',
                'streak-text': '🔥 7 day streak',
                'points-text': '⭐ 450 points',
                'cultural-text': 'Today\'s math lesson uses examples from East African trade routes and local currency conversions to make learning more relevant to your context.'
            },
            es: {
                'main-title': 'Aprendizaje Impulsado por IA para Todos',
                'main-subtitle': 'Rompiendo barreras hacia una educación de calidad a través de tecnología IA inclusiva y culturalmente adaptativa.',
                'welcome-text': '¡Bienvenida de vuelta, Aisha!',
                'location-text': 'Aprendiendo desde Nairobi, Kenia',
                'streak-text': '🔥 7 días seguidos',
                'points-text': '⭐ 450 puntos',
                'cultural-text': 'La lección de matemáticas de hoy usa ejemplos de rutas comerciales del Este de África y conversiones de moneda local.'
            },
            fr: {
                'main-title': 'Apprentissage IA pour Tous',
                'main-subtitle': 'Briser les barrières vers une éducation de qualité grâce à une technologie IA inclusive et culturellement adaptative.',
                'welcome-text': 'Bon retour, Aisha!',
                'location-text': 'Apprentissage depuis Nairobi, Kenya',
                'streak-text': '🔥 7 jours consécutifs',
                'points-text': '⭐ 450 points',
                'cultural-text': 'La leçon de mathématiques d\'aujourd\'hui utilise des exemples des routes commerciales de l\'Afrique de l\'Est.'
            },
            hi: {
                'main-title': 'सभी के लिए AI-संचालित शिक्षा',
                'main-subtitle': 'समावेशी, सांस्कृतिक रूप से अनुकूल AI तकनीक के माध्यम से गुणवत्तापूर्ण शिक्षा की बाधाओं को तोड़ना।',
                'welcome-text': 'वापसी पर स्वागत, आइशा!',
                'location-text': 'नैरोबी, केन्या से सीख रहे हैं',
                'streak-text': '🔥 7 दिन की लकीर',
                'points-text': '⭐ 450 अंक',
                'cultural-text': 'आज का गणित पाठ पूर्वी अफ़्रीकी व्यापार मार्गों के उदाहरण उपयोग करता है।'
            }
        };

        // Cultural contexts for adaptive learning
        const culturalContexts = {
            'east-africa': {
                currency: 'KES',
                examples: ['matatu transport', 'maize farming', 'safari tourism'],
                colors: ['#1565C0', '#2E7D32', '#F57C00'],
                culturalNotes: 'East African context with Swahili influences'
            },
            'south-asia': {
                currency: 'INR',
                examples: ['rickshaw travel', 'rice farming', 'monsoon patterns'],
                colors: ['#FF9800', '#4CAF50', '#2196F3'],
                culturalNotes: 'South Asian context with diverse languages'
            },
            'latin-america': {
                currency: 'USD',
                examples: ['bus systems', 'coffee farming', 'carnival economics'],
                colors: ['#E91E63', '#FF5722', '#8BC34A'],
                culturalNotes: 'Latin American context with Spanish/Portuguese influences'
            }
        };

        // Enhanced AI-powered learning engine
        class AILearningEngine {
            constructor() {
                this.learningProfile = {
                    visualLearner: 0.7,
                    auditoryLearner: 0.3,
                    kinestheticLearner: 0.5,
                    currentLevel: 'intermediate',
                    weakAreas: ['algebra', 'geometry'],
                    strongAreas: ['arithmetic', 'word-problems'],
                    culturalContext: appState.culturalContext
                };

                // Knowledge base for different subjects
                this.knowledgeBase = {
                    math: {
                        algebra: {
                            'linear equations': 'Linear equations show relationships between variables. Like if a matatu charges base fare + cost per km.',
                            'quadratic equations': 'Quadratic equations involve x². Think of projectile motion like throwing a ball.',
                            'systems of equations': 'Multiple equations working together, like planning costs for multiple transport options.',
                            'graphing': 'Visual representation of equations. Like mapping matatu routes on a coordinate system.'
                        },
                        geometry: {
                            'area and perimeter': 'Calculating space and boundaries. Like finding farm plot sizes or building materials needed.',
                            'triangles': 'Three-sided shapes everywhere - from roof structures to navigation triangulation.',
                            'circles': 'Round shapes with special properties. Like wheel circumference or circular farm irrigation.'
                        },
                        statistics: {
                            'mean and median': 'Finding averages and middle values. Like average rainfall or median income in your region.',
                            'probability': 'Likelihood of events. Like weather patterns or crop yield predictions.',
                            'data analysis': 'Making sense of information. Like analyzing market prices or population trends.'
                        }
                    },
                    science: {
                        biology: {
                            'cell structure': 'Basic units of life. All living things from baobab trees to zebras are made of cells.',
                            'ecosystems': 'How living things interact. Like the relationships in savanna grasslands.',
                            'genetics': 'How traits pass from parents to offspring. Like why some maize varieties grow better.'
                        },
                        chemistry: {
                            'atoms and molecules': 'Tiny building blocks of matter. Everything from water to soil is made of these.',
                            'chemical reactions': 'How substances change. Like digestion or photosynthesis in plants.',
                            'acids and bases': 'Different types of substances. Like citrus fruits (acidic) vs soap (basic).'
                        },
                        physics: {
                            'motion': 'How things move. From walking speed to vehicle acceleration.',
                            'energy': 'The ability to do work. Solar, wind, and human energy powering daily life.',
                            'waves': 'Repeating patterns. Sound waves, light waves, and radio waves for communication.'
                        }
                    },
                    languages: {
                        english: {
                            'grammar': 'Rules for clear communication. Like verb tenses and sentence structure.',
                            'vocabulary': 'Building word knowledge for better expression and understanding.',
                            'reading comprehension': 'Understanding written text deeply and making connections.'
                        },
                        writing: {
                            'essays': 'Organized thoughts on paper. Structure your ideas clearly with intro, body, conclusion.',
                            'creative writing': 'Using imagination to tell stories that engage readers.',
                            'technical writing': 'Clear, precise communication for instructions or explanations.'
                        }
                    },
                    social_studies: {
                        history: {
                            'local history': 'Understanding your community\'s past and how it shapes the present.',
                            'world history': 'Major events and how different cultures developed and interacted.',
                            'economics': 'How people produce, distribute, and use goods and services.'
                        },
                        geography: {
                            'physical geography': 'Land features, climate, and natural resources in your region and beyond.',
                            'human geography': 'How people live, work, and move around different places.',
                            'maps and navigation': 'Understanding location, direction, and spatial relationships.'
                        }
                    }
                };

                // Conversation context for more natural responses
                this.conversationHistory = [];
                this.currentTopic = null;
            }

            // Enhanced question analysis
            analyzeQuestion(question) {
                const lowercaseQ = question.toLowerCase();
                
                // Subject detection
                const subjects = {
                    math: ['math', 'algebra', 'geometry', 'equation', 'solve', 'calculate', 'number', 'graph', 'statistics', 'probability'],
                    science: ['science', 'biology', 'chemistry', 'physics', 'cell', 'atom', 'energy', 'experiment'],
                    english: ['english', 'grammar', 'writing', 'essay', 'vocabulary', 'reading', 'story'],
                    history: ['history', 'past', 'culture', 'civilization', 'timeline', 'events'],
                    geography: ['geography', 'map', 'location', 'climate', 'region', 'country']
                };

                let detectedSubject = 'general';
                let confidence = 0;

                for (const [subject, keywords] of Object.entries(subjects)) {
                    const matches = keywords.filter(keyword => lowercaseQ.includes(keyword)).length;
                    if (matches > confidence) {
                        confidence = matches;
                        detectedSubject = subject;
                    }
                }

                // Difficulty detection
                const difficultyIndicators = {
                    basic: ['basic', 'simple', 'easy', 'beginner', 'start', 'introduction'],
                    intermediate: ['explain', 'how', 'why', 'example', 'show me'],
                    advanced: ['prove', 'derive', 'analyze', 'complex', 'advanced', 'difficult']
                };

                let difficulty = 'intermediate';
                for (const [level, indicators] of Object.entries(difficultyIndicators)) {
                    if (indicators.some(indicator => lowercaseQ.includes(indicator))) {
                        difficulty = level;
                        break;
                    }
                }

                return {
                    subject: detectedSubject,
                    difficulty: difficulty,
                    confidence: confidence,
                    isQuestion: lowercaseQ.includes('?') || lowercaseQ.startsWith('what') || lowercaseQ.startsWith('how') || lowercaseQ.startsWith('why'),
                    needsExample: lowercaseQ.includes('example') || lowercaseQ.includes('show me')
                };
            }

            // Generate culturally relevant response
            generatePersonalizedContent(question) {
                const analysis = this.analyzeQuestion(question);
                const context = culturalContexts[this.learningProfile.culturalContext];
                
                // Store conversation context
                this.conversationHistory.push({
                    question: question,
                    analysis: analysis,
                    timestamp: new Date()
                });

                // Keep only last 5 conversations for context
                if (this.conversationHistory.length > 5) {
                    this.conversationHistory = this.conversationHistory.slice(-5);
                }

                // Try to find a specific answer first
                let response = this.getSpecificAnswer(question, context);
                
                // If no specific answer found, be honest about limitations
                if (!response) {
                    response = `I apologize, but I'm not trained enough to provide a complete answer to "${question}". My current knowledge is limited to basic concepts in mathematics, science, and language arts with culturally relevant examples. 

Could you try asking about:
• Basic math (like solving simple equations: 2x + 5 = 15)
• Elementary science (like "What is photosynthesis?")  
• Grammar basics (like "What's the difference between past and present tense?")
• Simple cultural adaptations of these topics

I'm continuously learning to better serve students in ${context.culturalNotes}.`;
                }

                return response;
            }

            getSpecificAnswer(question, context) {
                const q = question.toLowerCase().trim();
                
                // Mathematics - Specific problem solving
                if (q.includes('solve') && (q.includes('equation') || q.includes('x'))) {
                    // Extract equation if possible
                    const eqMatch = question.match(/(\d*x\s*[+\-]\s*\d+\s*=\s*\d+)|(\d+\s*[+\-]\s*\d*x\s*=\s*\d+)/);
                    if (eqMatch) {
                        return this.solveLinearEquation(eqMatch[0], context);
                    }
                    return `I can help solve linear equations! Please provide a specific equation like "2x + 5 = 15" or "3x - 7 = 11". 

Here's how to solve any linear equation:
1. Isolate terms with x on one side
2. Move constants to the other side
3. Divide both sides by the coefficient of x

Example using ${context.currency}: If matatu fare is ${context.currency} 50 + ${context.currency} 10x = ${context.currency} 120, then 10x = 70, so x = 7 kilometers.`;
                }

                // Basic arithmetic
                if (q.match(/what\s+is\s+\d+\s*[\+\-\*\/]\s*\d+/)) {
                    const mathMatch = q.match(/(\d+)\s*([\+\-\*\/])\s*(\d+)/);
                    if (mathMatch) {
                        return this.solveArithmetic(mathMatch[1], mathMatch[2], mathMatch[3], context);
                    }
                }

                // Percentage calculations
                if (q.includes('percent') || q.includes('%')) {
                    if (q.includes('what is') && q.includes('of')) {
                        return `To find a percentage of a number:
1. Convert percentage to decimal (divide by 100)
2. Multiply by the number

Example: 15% of ${context.currency} 200 = 0.15 × 200 = ${context.currency} 30

This is useful for calculating tips at restaurants or discounts when shopping in your area.`;
                    }
                }

                // Science - Basic concepts
                if (q.includes('photosynthesis')) {
                    return `Photosynthesis is how plants make food using sunlight. Here's the process:

**What happens:**
• Plants take in CO₂ from air through leaves
• Roots absorb water from soil  
• Chlorophyll in leaves captures sunlight
• These combine to make glucose (sugar) + oxygen

**Chemical equation:** 6CO₂ + 6H₂O + sunlight → C₆H₁₂O₆ + 6O₂

**Local example:** The ${context.examples[1]} in your region use photosynthesis to grow. More sunlight = better growth, which is why farmers plan planting seasons around weather patterns.

This process is why plants are green and why we need trees for clean air!`;
                }

                if (q.includes('cell') && (q.includes('what') || q.includes('structure'))) {
                    return `A cell is the basic unit of all living things. Think of it like a tiny factory!

**Main parts:**
• **Cell membrane:** Controls what goes in/out (like a security gate)
• **Nucleus:** Controls the cell (like a manager's office)
• **Cytoplasm:** Jelly-like substance where work happens
• **Mitochondria:** Powerhouses that make energy

**Plant cells also have:**
• **Cell wall:** Strong outer layer for support
• **Chloroplasts:** Where photosynthesis happens (makes plants green)

Every living thing around you - from the smallest insects to the largest baobab trees - is made of these tiny cells working together!`;
                }

                // English/Grammar
                if (q.includes('past tense') || q.includes('present tense')) {
                    return `**Present Tense:** Actions happening now or regularly
• I walk to school (habitual)
• She is walking (happening now)
• They walk every day

**Past Tense:** Actions that already finished
• I walked to school yesterday
• She walked to the market
• They walked for two hours

**Local examples:**
• Present: "The matatu arrives at 8 AM daily"
• Past: "The matatu arrived late yesterday"

**Tip:** Regular verbs add -ed for past tense, but irregular verbs change completely (go → went, eat → ate).`;
                }

                if (q.includes('difference between') && q.includes('mean') && q.includes('median')) {
                    return `**Mean:** Add all numbers and divide by how many numbers you have
**Median:** The middle number when arranged in order

**Example with ${context.examples[2]} visitor numbers:**
Daily visitors: 12, 15, 18, 20, 25, 30, 100

**Mean:** (12+15+18+20+25+30+100) ÷ 7 = 220 ÷ 7 = 31.4 visitors
**Median:** Middle number = 20 visitors (4th position out of 7)

**When to use:**
• Mean: Good for normal data
• Median: Better when there are extreme values (like the 100 visitors day)

The median (20) better represents typical attendance than the mean (31.4) because of that one very busy day.`;
                }

                // Fractions
                if (q.includes('fraction')) {
                    return `Fractions represent parts of a whole!

**Basic concept:** 3/4 means 3 parts out of 4 total parts

**Local example:** If you buy a ${context.examples[1]} plot:
• 1/4 = one quarter of the plot
• 1/2 = half the plot  
• 3/4 = three quarters of the plot

**Adding fractions:**
Same denominator: 1/4 + 2/4 = 3/4
Different denominators: 1/2 + 1/4 = 2/4 + 1/4 = 3/4

**Real use:** If ${context.currency} 100 is split among 4 people, each gets 100 ÷ 4 = ${context.currency} 25 (or 1/4 of the total).`;
                }

                // Area and perimeter
                if (q.includes('area') || q.includes('perimeter')) {
                    return `**Area:** Space inside a shape (measured in square units)
**Perimeter:** Distance around the outside (measured in linear units)

**Rectangle formulas:**
• Area = length × width
• Perimeter = 2(length + width)

**Example:** ${context.examples[1]} plot that's 20m × 15m
• Area = 20 × 15 = 300 square meters (for planting)
• Perimeter = 2(20 + 15) = 70 meters (for fencing)

**Circle formulas:**
• Area = π × r² (π ≈ 3.14)  
• Circumference = 2 × π × r

This helps farmers plan crops and materials needed for fencing!`;
                }

                // Return null if no specific answer found
                return null;
            }

            solveLinearEquation(equation, context) {
                // Simple linear equation solver for educational purposes
                try {
                    const eq = equation.replace(/\s/g, '');
                    
                    // Handle formats like "2x+5=15" or "3x-7=11"
                    const match = eq.match(/(\d*)x([+\-])(\d+)=(\d+)/);
                    if (match) {
                        const coefficient = match[1] === '' ? 1 : parseInt(match[1]);
                        const operator = match[2];
                        const constant = parseInt(match[3]);
                        const result = parseInt(match[4]);
                        
                        let x;
                        if (operator === '+') {
                            x = (result - constant) / coefficient;
                        } else {
                            x = (result + constant) / coefficient;
                        }
                        
                        return `**Solving ${equation}:**

Step 1: Isolate the x term
${operator === '+' ? `${coefficient}x = ${result} - ${constant}` : `${coefficient}x = ${result} + ${constant}`}
${coefficient}x = ${operator === '+' ? result - constant : result + constant}

Step 2: Solve for x
x = ${operator === '+' ? result - constant : result + constant} ÷ ${coefficient}
**x = ${x}**

**Check:** ${coefficient} × ${x} ${operator} ${constant} = ${coefficient * x + (operator === '+' ? constant : -constant)} ✓

**Real-world example:** If a ${context.examples[0]} charges ${context.currency} ${constant} base fare plus ${context.currency} ${coefficient} per km, and total cost is ${context.currency} ${result}, then distance traveled is ${x} km.`;
                    }
                } catch (e) {
                    return null;
                }
                return null;
            }

            solveArithmetic(num1, operator, num2, context) {
                const n1 = parseInt(num1);
                const n2 = parseInt(num2);
                let result;
                let operation;

                switch(operator) {
                    case '+':
                        result = n1 + n2;
                        operation = 'addition';
                        break;
                    case '-':
                        result = n1 - n2;
                        operation = 'subtraction';
                        break;
                    case '*':
                        result = n1 * n2;
                        operation = 'multiplication';
                        break;
                    case '/':
                        if (n2 === 0) return "Cannot divide by zero!";
                        result = n1 / n2;
                        operation = 'division';
                        break;
                    default:
                        return null;
                }

                return `**${n1} ${operator} ${n2} = ${result}**

This ${operation} could represent: ${context.currency} ${n1} ${operator === '+' ? 'plus' : operator === '-' ? 'minus' : operator === '*' ? 'multiplied by' : 'divided by'} ${n2} = ${context.currency} ${result}

Useful for calculating costs, quantities, or measurements in daily life!`;
            }

            addCulturalExample(subject, context) {
                const examples = {
                    math: ` Here's a practical example: If you're planning to buy supplies for ${context.examples[1]}, you need to calculate costs, quantities, and potential profits using mathematical formulas.`,
                    
                    science: ` For instance, understanding the science behind ${context.examples[1]} can help improve crop yields and sustainability.`,
                    
                    english: ` Try writing a descriptive paragraph about ${context.examples[2]} in your area - this practices vocabulary, sentence structure, and cultural knowledge simultaneously.`,
                    
                    general: ` This connects directly to ${context.examples[Math.floor(Math.random() * 3)]} that you might encounter in your daily life.`
                };
                
                return examples[subject] || examples.general;
            }

            // Enhanced progress assessment
            assessLearningProgress(responses) {
                const accuracy = responses.filter(r => r.correct).length / responses.length;
                const avgTime = responses.reduce((total, r) => total + r.timeSpent, 0) / responses.length;
                
                const assessment = {
                    accuracy: accuracy,
                    efficiency: accuracy / (avgTime / 1000),
                    recommendation: accuracy > 0.8 ? 'advance' : accuracy > 0.6 ? 'practice' : 'review',
                    culturalRelevance: 0.9, // Simulated - would be calculated based on engagement
                    nextTopics: this.suggestNextTopics(accuracy)
                };

                return assessment;
            }

            suggestNextTopics(accuracy) {
                if (accuracy > 0.8) {
                    return ['Advanced problem solving', 'Real-world applications', 'Project-based learning'];
                } else if (accuracy > 0.6) {
                    return ['Practice exercises', 'Concept reinforcement', 'Worked examples'];
                } else {
                    return ['Basic concepts review', 'Step-by-step guidance', 'Foundation building'];
                }
            }
        }

        const aiEngine = new AILearningEngine();

        // Enhanced chat functionality with typing indicators
        function sendMessage() {
            const input = document.getElementById('chatInput');
            const chatInterface = document.getElementById('chatInterface');
            
            if (input.value.trim()) {
                // Add user message
                const userMessage = document.createElement('div');
                userMessage.className = 'message user';
                userMessage.innerHTML = `<p>${input.value}</p>`;
                chatInterface.appendChild(userMessage);
                
                // Store user question
                const userQuestion = input.value.trim();
                
                // Show typing indicator
                const typingIndicator = document.createElement('div');
                typingIndicator.className = 'message ai thinking';
                typingIndicator.innerHTML = '<p class="typing-indicator">AI is thinking</p>';
                chatInterface.appendChild(typingIndicator);
                
                // Scroll to bottom
                chatInterface.scrollTop = chatInterface.scrollHeight;
                
                // Clear input immediately for better UX
                input.value = '';
                
                // Generate AI response with realistic delay
                setTimeout(() => {
                    // Remove typing indicator
                    chatInterface.removeChild(typingIndicator);
                    
                    // Generate personalized response
                    const aiResponse = aiEngine.generatePersonalizedContent(userQuestion);
                    
                    // Add AI message
                    const aiMessage = document.createElement('div');
                    aiMessage.className = 'message ai';
                    aiMessage.innerHTML = `<p>${aiResponse}</p>`;
                    chatInterface.appendChild(aiMessage);
                    
                    // Scroll to bottom
                    chatInterface.scrollTop = chatInterface.scrollHeight;
                    
                    // Announce new message for screen readers
                    announceToScreenReader('AI tutor responded');
                    
                }, Math.random() * 2000 + 1000); // Random delay between 1-3 seconds for realism
            }
        }

        // Complete dark mode toggle functionality
        function toggleDarkMode() {
            appState.darkMode = !appState.darkMode;
            document.body.classList.toggle('dark-mode', appState.darkMode);
            
            // Update button text to reflect current state
            const darkModeButton = document.querySelector('button[onclick="toggleDarkMode()"]');
            if (darkModeButton) {
                darkModeButton.innerHTML = appState.darkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
            }
            
            // Save preference (in real app, this would persist to backend)
            localStorage.setItem('darkMode', appState.darkMode);
            
            // Announce change for screen readers
            announceToScreenReader(`Dark mode ${appState.darkMode ? 'enabled' : 'disabled'}`);
        }

        function toggleHighContrast() {
            appState.highContrast = !appState.highContrast;
            document.body.classList.toggle('high-contrast', appState.highContrast);
            
            // Save preference
            localStorage.setItem('highContrast', appState.highContrast);
            
            // Announce change for screen readers
            announceToScreenReader(`High contrast ${appState.highContrast ? 'enabled' : 'disabled'}`);
        }

        function adjustFontSize() {
            appState.fontSize += 2;
            if (appState.fontSize > 24) appState.fontSize = 16;
            
            document.documentElement.style.fontSize = `${appState.fontSize}px`;
            localStorage.setItem('fontSize', appState.fontSize);
            announceToScreenReader(`Font size adjusted to ${appState.fontSize}px`);
        }

        // Helper function for screen reader announcements
        function announceToScreenReader(message) {
            const announcement = document.createElement('div');
            announcement.setAttribute('aria-live', 'polite');
            announcement.setAttribute('aria-atomic', 'true');
            announcement.className = 'sr-only';
            announcement.textContent = message;
            
            document.body.appendChild(announcement);
            
            // Remove the announcement after a brief delay
            setTimeout(() => {
                if (document.body.contains(announcement)) {
                    document.body.removeChild(announcement);
                }
            }, 1000);
        }

        // Enhanced language change functionality
        function changeLanguage(lang) {
            appState.currentLanguage = lang;
            
            // Update text content based on selected language
            const translation = translations[lang];
            if (translation) {
                Object.keys(translation).forEach(key => {
                    const element = document.getElementById(key);
                    if (element) {
                        element.textContent = translation[key];
                    }
                });
            }
            
            // Update AI's cultural context based on language
            const languageCulturalMap = {
                'en': 'east-africa',
                'es': 'latin-america',
                'hi': 'south-asia',
                'fr': 'east-africa', // Francophone Africa
                'ar': 'middle-east',
                'zh': 'east-asia'
            };
            
            if (languageCulturalMap[lang]) {
                appState.culturalContext = languageCulturalMap[lang];
                aiEngine.learningProfile.culturalContext = appState.culturalContext;
            }
            
            localStorage.setItem('language', lang);
            announceToScreenReader(`Language changed to ${lang}`);
        }

        // Initialize app with saved preferences
        function initializeApp() {
            // Load saved preferences
            const savedDarkMode = localStorage.getItem('darkMode') === 'true';
            const savedHighContrast = localStorage.getItem('highContrast') === 'true';
            const savedFontSize = parseInt(localStorage.getItem('fontSize')) || 16;
            const savedLanguage = localStorage.getItem('language') || 'en';
            
            // Apply saved preferences
            if (savedDarkMode) {
                appState.darkMode = true;
                document.body.classList.add('dark-mode');
                const darkModeButton = document.querySelector('button[onclick="toggleDarkMode()"]');
                if (darkModeButton) {
                    darkModeButton.innerHTML = '☀️ Light Mode';
                }
            }
            
            if (savedHighContrast) {
                appState.highContrast = true;
                document.body.classList.add('high-contrast');
            }
            
            if (savedFontSize !== 16) {
                appState.fontSize = savedFontSize;
                document.documentElement.style.fontSize = `${savedFontSize}px`;
            }
            
            if (savedLanguage !== 'en') {
                const languageSelector = document.querySelector('.language-selector');
                if (languageSelector) {
                    languageSelector.value = savedLanguage;
                    changeLanguage(savedLanguage);
                }
            }
        }

        
        document.addEventListener('DOMContentLoaded', function() {
         
            initializeApp();
            
           
            const chatInput = document.getElementById('chatInput');
            if (chatInput) {
                chatInput.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        sendMessage();
                    }
                });
                
                
                chatInput.addEventListener('focus', function() {
                    announceToScreenReader('Chat input focused. Press Enter to send message.');
                });
            }
            
           
            const courseCards = document.querySelectorAll('.course-card button');
            courseCards.forEach((button, index) => {
                button.addEventListener('click', function() {
                    const courseName = this.closest('.course-card').querySelector('h4').textContent;
                    announceToScreenReader(`Starting course: ${courseName}`);
                    
                   
                    const chatInterface = document.getElementById('chatInterface');
                    const aiMessage = document.createElement('div');
                    aiMessage.className = 'message ai';
                    aiMessage.innerHTML = `<p>Great choice! I see you're interested in ${courseName}. This course is designed with your cultural context in mind. What specific aspects would you like to focus on first?</p>`;
                    chatInterface.appendChild(aiMessage);
                    chatInterface.scrollTop = chatInterface.scrollHeight;
                });
            });
            
            console.log('EduBridge AI Learning Platform initialized successfully!');
        });

        
        function addSampleInteraction() {
            const chatInterface = document.getElementById('chatInterface');
            
            const sampleQuestions = [
                "Solve: 2x + 5 = 15",
                "What is 25 + 17?",
                "What is photosynthesis?",
                "What's the difference between mean and median?",
                "Explain past tense vs present tense",
                "What is a cell structure?",
                "How do you calculate area and perimeter?",
                "What is 15% of 200?",
                "Solve: 3x - 7 = 11",
                "Explain fractions with examples"
            ];
            
           
            const sampleContainer = document.createElement('div');
            sampleContainer.style.margin = '0.5rem 0';
            
            const sampleLabel = document.createElement('label');
            sampleLabel.textContent = '💡 Try a sample question: ';
            sampleLabel.style.fontSize = '0.9rem';
            sampleLabel.style.color = '#6b7280';
            
            const sampleSelect = document.createElement('select');
            sampleSelect.className = 'language-selector';
            sampleSelect.style.marginLeft = '0.5rem';
            
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = 'Choose a sample question...';
            sampleSelect.appendChild(defaultOption);
            
            sampleQuestions.forEach(question => {
                const option = document.createElement('option');
                option.value = question;
                option.textContent = question;
                sampleSelect.appendChild(option);
            });
            
            sampleSelect.onchange = function() {
                if (this.value) {
                    const chatInput = document.getElementById('chatInput');
                    chatInput.value = this.value;
                    chatInput.focus();
                    this.value = ''; // Reset dropdown
                }
            };
            
            sampleContainer.appendChild(sampleLabel);
            sampleContainer.appendChild(sampleSelect);
            
           
            const inputGroup = document.querySelector('.input-group');
            inputGroup.parentNode.insertBefore(sampleContainer, inputGroup);
        }
        
        // Initialize sample interactions after DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(addSampleInteraction, 1000);
        });


         // Add newsletter form functionality
        document.addEventListener('DOMContentLoaded', function() {
            const newsletterForm = document.querySelector('.newsletter-form');
            if (newsletterForm) {
                newsletterForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const emailInput = this.querySelector('input[type="email"]');
                    if (emailInput.value) {
                        alert('Thank you for subscribing to our newsletter!');
                        emailInput.value = '';
                    }
                });
            }
        })



        

    