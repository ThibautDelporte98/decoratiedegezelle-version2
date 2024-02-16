import React from "react";
import { useParams } from "react-router-dom";
import Preferences from "./preferences";
import "../../scss/references/customer-preferences.scss";

const CustomerPreferences = ({ items }) => {
  const { url } = useParams();

  // Find the corresponding service based on the ID
  const realisation = items.find((item) => item.url === url);

  return (
    <div className="Preferences">
      <div className="container">
        <div className="preferences">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="preferences-request">
                <h2>De keuze van de klant</h2>
                <p>
                  De klant maakte een weloverwogen keuze voor de voordeur,
                  waarbij de focus lag op tijdloze elegantie en duurzaamheid.
                </p>
                <p>Hier zijn de details van de gekozen specificaties:</p>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <div className="preferences-info">
                {realisation && realisation.preferences && (
                  <>
                    {/* Render color preference */}
                    {realisation.preferences.color && realisation.preferences.color.map((product) => (
                      <Preferences
                        color={product.color}
                        colorName={product.colorName}
                        colorInfo={product.colorInfo}

                        showColor={product.showColor}
                      />

                    ))}

                    {/* Render product preferences */}
                    {realisation.preferences.product &&
                      realisation.preferences.product.map((product) => (
                        <Preferences
                          key={product.id}
                          titleProduct={product.title}
                          productImage={product.productImage}
                          productName={product.productName}
                          productInfo={product.productInfo}
                          showProduct={product.showProduct}
                        />
                      ))}

                    {/* Render goal choice preference */}
                    {realisation.preferences.goalChoice && (
                      <Preferences
                        goalListItem={realisation.preferences.goalChoice.text}
                        showGoalChoice={
                          realisation.preferences.goalChoice.showGoalChoice
                        }
                      />
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerPreferences;
