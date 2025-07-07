import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, User, MessageCircle, Calendar, Search, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

const AdminPanel = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const { toast } = useToast();

  const { data: contacts, isLoading, error, refetch } = useQuery<Contact[]>({
    queryKey: ['/api/contacts'],
    queryFn: async () => {
      try {
        const response = await apiRequest("GET", "/api/contacts");
        console.log("Admin panel contacts response:", response);
        return Array.isArray(response) ? response : [];
      } catch (error) {
        console.error("Failed to fetch contacts:", error);
        throw error;
      }
    },
    refetchInterval: 30000, // Auto-refresh every 30 seconds
  });

  useEffect(() => {
    if (contacts && Array.isArray(contacts)) {
      const filtered = contacts.filter(contact => 
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.message.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredContacts(filtered);
    } else {
      setFilteredContacts([]);
    }
  }, [contacts, searchTerm]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "Email address copied successfully",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading contacts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 dark:text-red-400 mb-4">Error loading contacts</p>
          <Button onClick={() => refetch()} variant="outline">
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Contact Messages
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage and view all contact form submissions
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Total Messages
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {contacts?.length || 0}
                  </p>
                </div>
                <MessageCircle className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    This Week
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {Array.isArray(contacts) ? contacts.filter(c => 
                      new Date(c.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
                    ).length : 0}
                  </p>
                </div>
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Today
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {Array.isArray(contacts) ? contacts.filter(c => 
                      new Date(c.createdAt).toDateString() === new Date().toDateString()
                    ).length : 0}
                  </p>
                </div>
                <User className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search by name, email, or message..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Messages List */}
        <div className="space-y-4">
          {filteredContacts?.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-300">
                  {searchTerm ? "No messages found matching your search." : "No messages yet."}
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredContacts?.map((contact) => (
              <Card key={contact.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                        <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                          {contact.name}
                        </CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <button
                            onClick={() => copyToClipboard(contact.email)}
                            className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer"
                          >
                            {contact.email}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-2">
                        {formatDate(contact.createdAt)}
                      </Badge>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(`mailto:${contact.email}`, '_blank')}
                        >
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 dark:bg-slate-800 p-4 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                      {contact.message}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Refresh Button */}
        <div className="mt-8 text-center">
          <Button onClick={() => refetch()} variant="outline">
            Refresh Messages
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;