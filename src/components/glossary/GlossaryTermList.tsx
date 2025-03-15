
import React, { useState } from 'react';
import { Tag, Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { glossaryTerms } from '@/data/glossaryTerms';

const GlossaryTermList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const categories = ['basic', 'advanced', 'metrics'];
  const categoryLabels = {
    basic: 'Basic Terms',
    advanced: 'Advanced Concepts',
    metrics: 'Metrics & Indicators'
  };

  const toggleFilter = (category: string) => {
    if (activeFilters.includes(category)) {
      setActiveFilters(activeFilters.filter(filter => filter !== category));
    } else {
      setActiveFilters([...activeFilters, category]);
    }
  };

  const filteredTerms = glossaryTerms.filter(term => {
    // Filter by search query
    const matchesSearch = 
      term.term.toLowerCase().includes(searchQuery.toLowerCase()) || 
      term.definition.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by category if any filters are active
    const matchesCategory = activeFilters.length === 0 || activeFilters.includes(term.category);
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="mt-10">
      <div className="mb-8 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex flex-wrap gap-2">
          <span className="flex items-center text-sm font-medium mr-2">
            <Tag size={16} className="mr-1" /> Filter:
          </span>
          {categories.map(category => (
            <Badge
              key={category}
              variant={activeFilters.includes(category) ? "default" : "outline"}
              className="cursor-pointer hover:bg-muted transition-colors"
              onClick={() => toggleFilter(category)}
            >
              {categoryLabels[category as keyof typeof categoryLabels]}
            </Badge>
          ))}
        </div>
        
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search terms..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className="space-y-8">
        {filteredTerms.length > 0 ? (
          filteredTerms.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm p-6">
              <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{item.term}</h3>
                <Badge variant="secondary" className="w-fit">
                  {categoryLabels[item.category as keyof typeof categoryLabels]}
                </Badge>
              </div>
              
              <div className="text-muted-foreground">
                <p className="text-base leading-relaxed">{item.definition}</p>
                {item.additionalInfo && (
                  <p className="mt-3 text-base leading-relaxed">{item.additionalInfo}</p>
                )}
                {item.example && (
                  <div className="mt-4 p-3 bg-slate-50 rounded-md border border-slate-100">
                    <p className="text-sm font-medium text-slate-700">Example:</p>
                    <p className="text-sm mt-1">{item.example}</p>
                  </div>
                )}
              </div>
              
              {item.relatedTerms && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm font-medium mb-2">Related Terms:</p>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedTerms.map((relatedTerm, i) => (
                      <Badge key={i} variant="outline" className="bg-slate-50">
                        {relatedTerm}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-muted-foreground">No matching terms found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GlossaryTermList;
