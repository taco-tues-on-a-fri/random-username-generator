const adjectives = [
  'aback',
  'abaft',
  'abandoned',
  'abashed',
  'aberrant',
  'abhorrent',
  'abiding',
  'abject',
  'ablaze',
  'able',
  'abnormal',
  'aboard',
  'aboriginal',
  'abortive',
  'abounding',
  'abrasive',
  'abrupt',
  'absent',
  'absorbed',
  'absorbing',
  'abstracted',
  'absurd',
  'abundant',
  'abusive',
  'acceptable',
  'accessible',
  'accidental',
  'accomplished',
  'accurate',
  'ace',
  'acid',
  'acidic',
  'acne-scarred',
  'acoustic',
  'acrid',
  'active',
  'actually',
  'adamant',
  'adaptable',
  'addicted',
  'adhesive',
  'adjoining',
  'adorable',
  'adored',
  'adulated',
  'adventurous',
  'affectionate',
  'afraid',
  'aggressive',
  'agile',
  'agonizing',
  'agreeable',
  'ahead',
  'ajar',
  'alcoholic',
  'alert',
  'alike',
  'alive',
  'alleged',
  'alluring',
  'aloof',
  'amazing',
  'ambiguous',
  'ambitious',
  'american',
  'amuck',
  'amused',
  'amusing',
  'ancient',
  'angry',
  'animal-like',
  'animated',
  'annoyed',
  'annoying',
  'antique',
  'anxious',
  'apathetic',
  'appreciated',
  'aquatic',
  'archaic',
  'ardent',
  'aromatic',
  'arrogant',
  'ashamed',
  'aspiring',
  'assorted',
  'astonished',
  'astonishing',
  'astounding',
  'attractive',
  'audacious',
  'auspicious',
  'authoritative',
  'automatic',
  'available',
  'average',
  'awake',
  'aware',
  'awe-inspiring',
  'awesome',
  'awestruck',
  'awful',
  'axiomatic',
  'bad',
  'bad ass',
  'barbarous',
  'bashful',
  'bawdy',
  'beaming',
  'beautiful',
  'bedazzling',
  "bee's knees",
  'befitting',
  'belligerent',
  'beneficial',
  'bent',
  'berserk',
  'best',
  'better',
  'bewildered',
  'bewitching',
  'big',
  'billowy',
  'bite-sized',
  'bitter',
  'bizarre',
  'black',
  'black-and-white',
  'blissful',
  'bloated',
  'bloody',
  'blue',
  'blue-eyed',
  'blue-tinted',
  'blushing',
  'boiling',
  'boisterous',
  'booming',
  'boorish',
  'bored',
  'boring',
  'bouncy',
  'boundless',
  'brainy',
  'brash',
  'brave',
  'brawny',
  'breakable',
  'breathtaking',
  'breezy',
  'brief',
  'bright',
  'brilliant',
  'broad',
  'broken',
  'brown',
  'bubbling',
  'bumpy',
  'burly',
  'bustling',
  'busy',
  'cagey',
  'calculating',
  'callous',
  'calm',
  'calming',
  'capable',
  'capricious',
  'careful',
  'careless',
  'caring',
  "cat's meow",
  "cat's pajamas",
  'cautious',
  'ceaseless',
  'celestial',
  'certain',
  'changeable',
  'charming',
  'cheap',
  'cheerful',
  'chemical',
  'cherished',
  'chiaroscuro',
  'chief',
  'childlike',
  'chilled',
  'chilly',
  'chivalrous',
  'chubby',
  'chunky',
  'clammy',
  'classy',
  'clean',
  'clear',
  'clever',
  'cloistered',
  'closed',
  'cloudy',
  'club-footed',
  'clumsy',
  'cluttered',
  'coherent',
  'cold',
  'colorful',
  'colossal',
  'combative',
  'comfortable',
  'comical',
  'commanding',
  'common',
  'companionable',
  'complete',
  'complex',
  'concerned',
  'condemned',
  'confident',
  'confused',
  'conniving',
  'conscious',
  'considerate',
  'contentment',
  'cooing',
  'cool',
  'cooperative',
  'coordinated',
  'corrupt',
  'courage',
  'courageous',
  'cowardly',
  'crabby',
  'craven',
  'crazy',
  'creepy',
  'crooked',
  'crowded',
  'cruel',
  'cuddly',
  'cultured',
  'cumbersome',
  'curious',
  'curly',
  'curved',
  'curvy',
  'cut',
  'cute',
  'cynical',
  'daffy',
  'daily',
  'damaged',
  'damaging',
  'damp',
  'dancing',
  'dandy',
  'dangerous',
  'dapper',
  'dark',
  'dashing',
  'dazzling',
  'dead',
  'deadpan',
  'deafening',
  'dear',
  'debonair',
  'decisive',
  'decorous',
  'deep',
  'deeply',
  'defeated',
  'defective',
  'defiant',
  'delicate',
  'delicious',
  'delightful',
  'delirious',
  'demented',
  'demonic',
  'dependent',
  'depressed',
  'deranged',
  'descriptive',
  'deserted',
  'desirable',
  'detailed',
  'determined',
  'devilish',
  'devoted',
  'didactic',
  'different',
  'difficult',
  'diligent',
  'diminutive',
  'direful',
  'dirty',
  'disagreeable',
  'disastrous',
  'discreet',
  'diseased',
  'disgusted',
  'disgusting',
  'disheveled',
  'disillusioned',
  'dispensable',
  'distinct',
  'disturbed',
  'divergent',
  'divine',
  'dizzy',
  'dominant',
  'domineering',
  'doozie',
  'doubtful',
  'drab',
  'draconian',
  'dramatic',
  'drawn out',
  'dreary',
  'dripping',
  'drunk',
  'dry',
  'dull',
  'dumbstruck',
  'dusty',
  'dynamic',
  'dysfunctional',
  'eager',
  'early',
  'earsplitting',
  'earthy',
  'easy',
  'eatable',
  'ebullient',
  'economic',
  'educated',
  'efficacious',
  'efficient',
  'eight',
  'elastic',
  'elated',
  'elderly',
  'electric',
  'elegant',
  'elfin',
  'elite',
  'embarrassed',
  'eminent',
  'empty',
  'enchanted',
  'enchanting',
  'encouraging',
  'endurable',
  'energetic',
  'enormous',
  'entertaining',
  'enthusiastic',
  'envious',
  'epic',
  'equable',
  'equal',
  'erect',
  'erratic',
  'ethereal',
  'evanescent',
  'evasive',
  'even',
  'exaggerated',
  'exalted',
  'excellent',
  'exceptional',
  'excited',
  'exciting',
  'exclusive',
  'exotic',
  'expectant',
  'expensive',
  'expressive',
  'exquisite',
  'extra-large',
  'extra-small',
  'extraordinary',
  'exuberant',
  'exultant',
  'fabulous',
  'faded',
  'faint',
  'faint fair',
  'faithful',
  'fallacious',
  'false',
  'familiar',
  'famous',
  'fanatical',
  'fancy',
  'fantabulous',
  'fantastic',
  'fantastical',
  'far',
  'far-flung',
  'fascinated',
  'fashionable',
  'fast',
  'fat',
  'faulty',
  'favorable',
  'fearful',
  'fearless',
  'febrile',
  'feeble',
  'feigned',
  'female',
  'feral',
  'fertile',
  'festive',
  'feverish',
  'few',
  'fierce',
  'fiery',
  'filthy',
  'fine',
  'finest',
  'finicky',
  'first',
  'first-class',
  'first-rate',
  'fishy',
  'five',
  'fixed',
  'flagrant',
  'flaky',
  'flashy',
  'flat',
  'flawless',
  'flimsy',
  'flippant',
  'floating',
  'flowery',
  'fluffy',
  'fluttering',
  'flying',
  'foamy',
  'folksy',
  'fond',
  'foolish',
  'foregoing',
  'forgetful',
  'forgiven',
  'forgiving',
  'fortunate',
  'four frail',
  'fragile',
  'frantic',
  'free',
  'freezing',
  'frenetic',
  'frenzied',
  'frequent',
  'fresh',
  'fretful',
  'friendly',
  'frightened',
  'frightening',
  'from a distance',
  'frosted',
  'full',
  'fumbling',
  'functional',
  'funkadelic',
  'funny',
  'furry',
  'furtive',
  'future',
  'futuristic',
  'fuzzy ',
  'gabby',
  'gainful',
  'galloping',
  'gamy',
  'gaping',
  'garrulous',
  'gaudy',
  'general',
  'gentle',
  'geometric',
  'giant',
  'giddy',
  'gifted',
  'gigantic',
  'glacial',
  'gladness',
  'glamorous',
  'gleaming',
  'gleeful',
  'glib',
  'glistening',
  'glorious',
  'glossy',
  'gnarly',
  'godly',
  'good',
  'goofy',
  'gorgeous',
  'graceful',
  'grand',
  'grandiose',
  'grateful',
  'gratis',
  'gray',
  'greasy',
  'great',
  'greedy',
  'green',
  'green-tinged',
  'grey',
  'grieving',
  'groovy',
  'grotesque',
  'grouchy',
  'groundbreaking',
  'grubby',
  'gruesome',
  'grumpy',
  'guarded',
  'guiltless',
  'gullible',
  'gusty',
  'guttural',
  'habitual',
  'hairy',
  'half',
  'hallowed',
  'halting',
  'handsome',
  'handsomely',
  'handy',
  'hanging',
  'hapless',
  'happy',
  'hard',
  'hard-to-find',
  'harmonious',
  'harsh',
  'hateful',
  'haunting',
  'heady',
  'healthy',
  'heartbreaking',
  'heavenly',
  'heavy',
  'hellish',
  'helpful',
  'helpless',
  'hesitant',
  'hidden',
  'hideous',
  'high',
  'high-pitched',
  'high-spirited',
  'highfalutin',
  'hilarious',
  'hissing',
  'historical',
  'hoc',
  'holistic',
  'hollow',
  'homeless',
  'homely',
  'honor',
  'honorable',
  'hopeful',
  'hopping',
  'horrible',
  'hospitable',
  'hot',
  'huge',
  'hulking',
  'humble',
  'humdrum',
  'humorous',
  'hungry',
  'hunky-dory',
  'hurried',
  'hurt',
  'hushed',
  'husky',
  'hypnotic',
  'hysterical',
  'icky',
  'icy',
  'idiotic',
  'ignorant',
  'ill',
  'ill-fated',
  'ill-informed',
  'illegal',
  'illuminated',
  'illustrious',
  'imaginary',
  'immense',
  'imminent',
  'impartial',
  'impeccable',
  'imperfect',
  'imperious',
  'impolite',
  'important',
  'imported',
  'impossible',
  'impressive',
  'impudent',
  'in charge',
  'incandescent',
  'incompetent',
  'inconclusive',
  'incredible',
  'industrious',
  'inexpensive',
  'infamous',
  'inflated',
  'innate',
  'innocent',
  'inquisitive',
  'insidious',
  'inspired',
  'instinctive',
  'intelligent',
  'interesting',
  'internal',
  'intimate',
  'intrepid',
  'invincible',
  'irate',
  'irritating',
  'itchy',
  'jaded',
  'jagged',
  'jazzy',
  'jealous',
  'jittery',
  'jobless',
  'joking',
  'jolly',
  'joyful',
  'joyous',
  'jubilant',
  'judicious',
  'juicy',
  'jumbled',
  'jumpy',
  'juvenile',
  'kaput',
  'keen',
  'kick ass',
  'kind',
  'kindhearted',
  'kindly',
  'knotty',
  'knowing',
  'knowledgeable',
  'known',
  'kryptonian',
  'labored',
  'lackadaisical',
  'lacking',
  'lame',
  'lamentable',
  'languid',
  'large',
  'last',
  'late',
  'laudable',
  'laughable',
  'lavish',
  'lazy',
  'lean',
  'learned',
  'left',
  'legal',
  'legendary',
  'lethal',
  'level',
  'lewd',
  'light',
  'lighthearted',
  'likable',
  'like',
  'likeable',
  'limping',
  'linear',
  'literate',
  'little',
  'lively',
  'living',
  'lofty',
  'lonely',
  'long',
  'long-term',
  'longing',
  'loose',
  'lopsided',
  'loud',
  'loutish',
  'love of',
  'lovely',
  'loving',
  'low',
  'lowly',
  'lucky',
  'ludicrous',
  'lulling',
  'luminescent',
  'luminous',
  'lumpy',
  'lush',
  'luxuriant',
  'luxurious',
  'lying',
  'lyrical',
  'macabre',
  'macho',
  'maddening',
  'madly',
  'magenta',
  'magical',
  'magnificent',
  'majestic',
  'makeshift',
  'male',
  'malicious',
  'mammoth',
  'maniacal',
  'manliness',
  'many',
  'march-like',
  'marked',
  'married',
  'marvelous',
  'massive',
  'masterful',
  'material',
  'materialistic',
  'mathematical',
  'mature',
  'mean',
  'measly',
  'meaty',
  'medical',
  'medicated',
  'meek',
  'mellow',
  'melodic',
  'melted',
  'merciful',
  'mere',
  'merry',
  'messy',
  'mighty',
  'military',
  'milky',
  'mind-blowing',
  'mindless',
  'miniature',
  'miniscule',
  'minor',
  'mischievous',
  'miscreant',
  'misty',
  'mixed',
  'moaning',
  'modern',
  'modest',
  'moldy',
  'momentous',
  'moonlit',
  'motionless',
  'mountainous',
  'muddled',
  'mundane',
  'murky',
  'mushy',
  'mute',
  'mysterious',
  'mystical',
  'mythological',
  'naive',
  'nappy',
  'narrow',
  'nasty',
  'natural',
  'naughty',
  'nauseating',
  'near',
  'neat',
  'nebulous',
  'necessary',
  'neckbearded',
  'needless',
  'needy',
  'neighborly',
  'nervous',
  'new',
  'next',
  'nice',
  'nifty',
  'nimble',
  'nine',
  'nippy',
  'noiseless',
  'noisy',
  'nonchalant',
  'nondescript',
  'nonstop',
  'normal',
  'nostalgic',
  'nosy',
  'noxious',
  'null',
  'numberless',
  'numerous',
  'nutritious',
  'nutty',
  'oafish',
  'obedient',
  'obeisant',
  'obese',
  'obnoxious',
  'obscene',
  'obsequious',
  'observant',
  'obsolete',
  'obtainable',
  'oceanic',
  'odd',
  'off-white',
  'offbeat',
  'old',
  'old-fashioned',
  'omniscient',
  'on fire',
  'one',
  'onerous',
  'open',
  'opposite',
  'optimal',
  'orange',
  'orange-hued',
  'ordinary',
  'organic',
  'ossified',
  'outgoing',
  'outrageous',
  'outstanding',
  'oval',
  'overconfident',
  'overjoyed',
  'overrated',
  'overstated',
  'overt',
  'overwrought',
  'paganish',
  'painful',
  'painstaking',
  'pale',
  'paltry',
  'panicky',
  'panoramic',
  'parallel',
  'parched',
  'parsimonious',
  'partying',
  'past',
  'pastoral',
  'pathetic',
  'peaceful',
  'peachy',
  'penitent',
  'perfect',
  'perfunctory',
  'periodic',
  'perky',
  'permissible',
  'perpetual',
  'perplexed',
  'persevering',
  'petite',
  'phenomenal',
  'phobic',
  'physical',
  'picayune',
  'pink',
  'pioneering',
  'pious',
  'piquant',
  'placid',
  'plain',
  'plant',
  'plastic',
  'plausible',
  'playful',
  'pleasant',
  'pleasurable',
  'plucky',
  'poignant',
  'pointless',
  'poised',
  'polished',
  'polite',
  'political',
  'poor',
  'portentous',
  'posh',
  'possessive',
  'possible',
  'powerful',
  'praiseworthy',
  'precious',
  'premium',
  'present',
  'pretty',
  'previous',
  'priceless',
  'pricey',
  'prickly',
  'prideful',
  'prime',
  'primo',
  'princess-like',
  'private',
  'probable',
  'productive',
  'profuse',
  'protective',
  'proud',
  'psychedelic',
  'psychotic',
  'public',
  'puffy',
  'pumped',
  'puny',
  'purple',
  'purring',
  'pushy',
  'puzzled',
  'puzzling',
  'quack',
  'quaint',
  'quarrelsome',
  'queenly',
  'questing',
  'questionable',
  'quick',
  'quickest',
  'quiet',
  'quirky',
  'quixotic',
  'quizzical',
  'rabid',
  'racial',
  'racy',
  'rad',
  'ragged',
  'rainy',
  'rambunctious',
  'rampant',
  'rapid',
  'rare',
  'raspy',
  'ratty',
  'ready',
  'real',
  'rebel',
  'receptive',
  'recondite',
  'red',
  'redundant',
  'reflective',
  'regal',
  'regular',
  'rejoicing',
  'relaxed',
  'relieved',
  'remarkable',
  'reminiscent',
  'repentant',
  'repulsive',
  'reserved',
  'resolute',
  'resonant',
  'responsible',
  'rhetorical',
  'rich',
  'ridiculous',
  'right',
  'righteous',
  'rightful',
  'rigid',
  'ripe',
  'ritualistic',
  'ritzy',
  'riveting',
  'roasted',
  'robust',
  'romantic',
  'roomy',
  'rotten',
  'rough',
  'round',
  'royal',
  'ruddy',
  'rude',
  'running',
  'rural',
  'rustic',
  'ruthless',
  'sable',
  'sad',
  'safe',
  'salty',
  'same',
  'sarcastic',
  'sassy',
  'satisfying',
  'savory',
  'scampering',
  'scandalous',
  'scarce',
  'scared',
  'scary',
  'scattered',
  'scientific',
  'scintillating',
  'scoffing',
  'scrawny',
  'screeching',
  'scrumtrulescent',
  'scurrying',
  'second',
  'second-hand',
  'secret',
  'secretive',
  'sedate',
  'seemly',
  'selective',
  'self-assured',
  'self-possessed',
  'selfish',
  'sensational',
  'sensitive',
  'separate',
  'serene',
  'serious',
  'shaggy',
  'shaking',
  'shaky',
  'shallow',
  'sharp',
  'shining',
  'shiny',
  'shivering',
  'shocking',
  'short',
  'shrill',
  'shut',
  'shy',
  'sick',
  'silent',
  'silky',
  'silly',
  'simple',
  'simpleminded',
  'simplistic',
  'sincere',
  'singing',
  'six',
  'skillful',
  'skinny',
  'skipping',
  'sleepy',
  'slick',
  'slim',
  'slimy',
  'slippery',
  'sloppy',
  'slow',
  'small',
  'smart',
  'smashing',
  'smelly',
  'smiling',
  'smoggy',
  'smooth',
  'smug',
  'sneaky',
  'snide',
  'snobbish',
  'snotty',
  'soaring',
  'soft',
  'soggy',
  'solid',
  'somber',
  'sophisticated',
  'sordid',
  'sore',
  'sour',
  'sparkling',
  'special',
  'spectacular',
  'spell-like',
  'spherical',
  'spicy',
  'spidery',
  'spiffy',
  'spiky',
  'spiritual',
  'spiteful',
  'splashing',
  'splendid',
  'splendiferous',
  'spooky',
  'spotless',
  'spotted',
  'spotty',
  'sprinting',
  'spurious',
  'squalid',
  'square',
  'squealing',
  'squeamish',
  'staking',
  'stale',
  'standing',
  'starlit',
  'starry',
  'startling',
  'statuesque',
  'steadfast',
  'steady',
  'steep',
  'stellar',
  'stereotyped',
  'sticky',
  'stiff',
  'stimulating',
  'stingy',
  'stormy',
  'straight',
  'strange',
  'striking',
  'striped',
  'strong',
  'stunning',
  'stupendous',
  'stupid',
  'sturdy',
  'stylish',
  'subdued',
  'sublime',
  'subsequent',
  'substantial',
  'successful',
  'succinct',
  'sudden',
  'sulky',
  'summery',
  'super',
  'super-duper',
  'super-excellent',
  'superb',
  'superficial',
  'superior',
  'supreme',
  'surprised',
  'swanky',
  'sweaty',
  'sweet',
  'swell',
  'sweltering',
  'swift',
  'sympathetic',
  'symptomatic',
  'synonymous',
  'taboo',
  'tacit',
  'tacky',
  'tactless',
  'talented',
  'talkative',
  'tall',
  'tame',
  'tan',
  'tangible',
  'tangy',
  'tapping',
  'tart',
  'tasteful',
  'tasteless',
  'tasty',
  'tattooed',
  'tawdry',
  'tearful',
  'teasing',
  'tedious',
  'teeny',
  'teeny-tiny',
  'telling',
  'temporary',
  'ten',
  'tender',
  'tender tense',
  'tense',
  'tenuous',
  'terrible',
  'terrific',
  'tested',
  'testy',
  'thankful',
  'therapeutic',
  'thick',
  'thin',
  'thinkable',
  'third',
  'thirsty',
  'thoughtful',
  'thoughtless',
  'threatening',
  'three',
  'thrilling',
  'thundering',
  'tidy',
  'tight',
  'tightfisted',
  'tingling',
  'tinkling',
  'tiny',
  'tiptop',
  'tired',
  'tiresome',
  'toasty-warm',
  'tongue-in-cheek',
  'toothsome',
  'top-notch',
  'torpid',
  'totemic',
  'touching',
  'tough',
  'towering',
  'tranquil',
  'transcendent',
  'trashy',
  'treasured',
  'trembling',
  'tremendous',
  'tricky',
  'trite',
  'triumphant',
  'troubled',
  'troublesome',
  'truculent',
  'true',
  'truthful',
  'twinkling',
  'two',
  'typical',
  'ubiquitous',
  'ugliest',
  'ugly',
  'ultimate',
  'ultra',
  'unable',
  'unaccountable',
  'unadvised',
  'unarmed',
  'unbecoming',
  'unbiased',
  'uncomfortably loud',
  'uncomfortably creepy',
  'uncomfortably quiet',
  'uncomfortably small',
  'uncomfortably large',
  'uncomfortably plain',
  'uncovered',
  'understood',
  'undesirable',
  'undulating',
  'unequal',
  'unequaled',
  'unethical',
  'uneven',
  'unhealthy',
  'uninterested',
  'unique',
  'unkempt',
  'unknown',
  'unnatural',
  'unpleasant',
  'unreal',
  'unruly',
  'unsightly',
  'unsuitable',
  'untidy',
  'unused',
  'unusual',
  'unwieldy',
  'unwritten',
  'upbeat',
  'uppity',
  'upset',
  'uptight',
  'urgent',
  'used',
  'useful',
  'useless',
  'utopian',
  'utter',
  'uttermost',
  'vacuous',
  'vagabond',
  'vague',
  'vaguely creepy',
  'overly creepy',
  'valuable',
  'various',
  'vast',
  'vegan',
  'veiled',
  'velvety',
  'vengeful',
  'venomous',
  'verdant',
  'versed',
  'victorious',
  'vigorous',
  'violent',
  'violet',
  'virile',
  'vivacious',
  'voiceless',
  'volatile',
  'voracious',
  'vulgar',
  'wacky',
  'waggish',
  'waiting',
  'wakeful',
  'walking',
  'wandering',
  'wanting',
  'warlike',
  'warm',
  'wary',
  'wasteful',
  'watery',
  'weak',
  'wealthy',
  'weary',
  'well-dressed',
  'well-groomed',
  'well-made',
  'well-off',
  'well-to-do',
  'wet',
  'whimsical',
  'whiny',
  'whispering',
  'white',
  'whole',
  'wholesale',
  'wicked',
  'wide',
  'wide-eyed',
  'wiggly',
  'wild',
  'willing',
  'windy',
  'wiry',
  'wise',
  'wistful',
  'witty',
  'woebegone',
  'womanly',
  'wonderful',
  'wondering',
  'wondrous',
  'wooden',
  'woozy',
  'workable',
  'world-class',
  'worried',
  'worthless',
  'wrathful',
  'wretched',
  'wrong',
  'wry',
  'xenophobic',
  'yellow',
  'yielding',
  'young',
  'youthful',
  'yummy',
  'zany',
  'zealous',
  'zestful',
  'zesty',
  'zippy',
  'zonked',
]
